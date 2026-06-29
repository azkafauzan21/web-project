import math
import typing

def calc_crater_vulnerability(dist_m: float, final_crater_diam: float, pixel_len: float) -> float:
    crater_radius = final_crater_diam / 2.0
    dist_pix = round(dist_m / pixel_len)
    cell_area = pixel_len * pixel_len
    crater_area = math.pi * ((final_crater_diam / 2.0)**2.0)
    pix_area = ((2.0 * dist_pix + 1.0)**2.0) * cell_area
    crater2cell_ratio = crater_area / pix_area
    
    if (final_crater_diam > 0.0) and dist_m <= (crater_radius + (pixel_len/2.0)):
        if (dist_pix < 1.0) and (crater2cell_ratio <= 1.0):
            vuln_crater = crater2cell_ratio
        else:
            inside_pix_area = ((dist_pix**2)/2.0) * cell_area
            area_circle_secs = abs(crater_area - inside_pix_area)
            area_pix_ring = pix_area - inside_pix_area
            vuln_crater = area_circle_secs / area_pix_ring if area_pix_ring > 0 else 1.0
            if vuln_crater > 1.0:
                vuln_crater = 1.0
    else:
        vuln_crater = 0.0
    return vuln_crater

def calc_seismic_vulnerability(eff_mag: float) -> float:
    vuln_seis = 1. / (1. + math.exp(-2.51607678 * (eff_mag - 8.68559246)))
    if vuln_seis > 1.0:
         vuln_seis = 1.0
    elif vuln_seis < 0.0 or eff_mag < 4.5:
         vuln_seis = 0.0
    return vuln_seis

def calc_overpressure_vulnerability(press: float) -> float:
    if press <= 150000.0:
        vuln_press = 0.0
    elif press >= 900000.0:
        vuln_press = 1.0
    else:
         vuln_press = 1. / (1. + math.exp(-(press-440430.986)*0.0000242498102))
         if vuln_press > 1.0:
             vuln_press = 1.0
         elif vuln_press < 0.0:
             vuln_press = 0.0
    return vuln_press

def calc_therm_rad_vulnerability(fPhi: float) -> float:
    vuln_therm = 0.47 * ( 1. / (1. + math.exp( -0.00000562326741 * ( fPhi - 731641.664 ))))
    if fPhi < 85000.0 or vuln_therm < 0.0:
        vuln_therm = 0.0
    elif vuln_therm > 1.0:
        vuln_therm = 1.0
    return vuln_therm

def calc_high_wind_vulnerability(v_wind: float) -> float:
    vuln_wind = 1. / (1. + math.exp(-(v_wind-1.12444654e+02)*5.48261521e-02))
    if v_wind < 10. or vuln_wind < 0.0:
        vuln_wind = 0.0
    elif vuln_wind > 1.0 or v_wind > 250.:
        vuln_wind = 1.0
    return vuln_wind

def calc_ejecta_blanket_vulnerability(t_ejecta: float) -> float:
    ejecta_load_kPa = t_ejecta * 1.6 * 9.80655
    P_collapse = (1.0 + math.exp(-1.37*(ejecta_load_kPa-3.14)))**(-4.6)    
    vuln_ejecta = 0.078 * P_collapse
    if vuln_ejecta < 0.0 or t_ejecta < 0.001:
        vuln_ejecta = 0.0
    elif vuln_ejecta > 1.0:
        vuln_ejecta = 1.0
    return vuln_ejecta

def simulate_impact(diameter_m: float, velocity_kms: float, distance_km: float) -> typing.Dict[str, float]:
    """
    Estimates the physical effects of an impact at a certain distance
    using simplified scaling laws based on Collins (2005) & Rumpf (2018).
    """
    density_kgm3 = 3000.0 # Stony asteroid density
    radius_m = diameter_m / 2.0
    volume_m3 = (4.0 / 3.0) * math.pi * (radius_m ** 3)
    mass_kg = density_kgm3 * volume_m3
    
    velocity_ms = velocity_kms * 1000.0
    energy_joules = 0.5 * mass_kg * (velocity_ms ** 2)
    energy_megatons = energy_joules / 4.184e15

    d_km = max(0.1, distance_km)
    d_m = d_km * 1000.0
    
    # Crater diameter (simplified scaling)
    crater_diameter_m = 1.161 * math.pow(density_kgm3/2500.0, 1.0/3.0) * math.pow(diameter_m, 0.78) * math.pow(velocity_ms, 0.44)
    
    # Seismic magnitude
    eff_mag = 0.67 * math.log10(energy_joules) - 5.87 - (0.0048 * d_km) if energy_joules > 0 else 0.0
    eff_mag = max(0.0, eff_mag)
    
    # Wind velocity (m/s)
    v_wind = (energy_megatons * 1000000.0) / math.pow(d_km, 2.5) if d_km > 0 else 0.0
    
    # Overpressure (Pa)
    press = (energy_megatons * 3e7) / math.pow(d_km, 2) if d_km > 0 else 0.0
    
    # Thermal Radiation (J/m2)
    f_phi = (energy_megatons * 1e11) / math.pow(d_km, 2) if d_km > 0 else 0.0
    
    # Calculate radius where thermal radiation causes 1st degree burns (~1.2e5 J/m2)
    thermal_radius_km = math.sqrt((energy_megatons * 1e11) / 120000.0) if energy_megatons > 0 else 0.0
    
    # Ejecta thickness
    # Simplistic scaling for ejecta thickness: t_ejecta = R_crater * (r/R_crater)^-3
    r_crater = crater_diameter_m / 2.0
    if d_m > r_crater and r_crater > 0:
        t_ejecta = r_crater * math.pow(d_m / r_crater, -3.0)
    else:
        t_ejecta = 1000.0 # Arbitrary large number inside crater

    # Vulnerabilities
    vuln_crater = calc_crater_vulnerability(d_m, crater_diameter_m, 100.0) # Assume 100m pixel length for estimation
    vuln_seismic = calc_seismic_vulnerability(eff_mag)
    vuln_wind = calc_high_wind_vulnerability(v_wind)
    vuln_press = calc_overpressure_vulnerability(press)
    vuln_therm = calc_therm_rad_vulnerability(f_phi)
    vuln_ejecta = calc_ejecta_blanket_vulnerability(t_ejecta)
    
    max_fatality = max(vuln_crater, vuln_seismic, vuln_wind, vuln_press, vuln_therm, vuln_ejecta) * 100.0

    return {
        "energy_megatons": energy_megatons,
        "crater_diameter_m": crater_diameter_m,
        "eff_mag": eff_mag,
        "v_wind_ms": v_wind,
        "overpressure_pa": press,
        "thermal_radiation_jm2": f_phi,
        "thermal_radius_km": thermal_radius_km,
        "ejecta_thickness_m": t_ejecta,
        "vuln_crater_pct": vuln_crater * 100.0,
        "vuln_seismic_pct": vuln_seismic * 100.0,
        "vuln_wind_pct": vuln_wind * 100.0,
        "vuln_pressure_pct": vuln_press * 100.0,
        "vuln_thermal_pct": vuln_therm * 100.0,
        "vuln_ejecta_pct": vuln_ejecta * 100.0,
        "max_fatality_pct": max_fatality
    }
