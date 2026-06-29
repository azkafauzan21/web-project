import os
import re

mapping = {
    "Activity": "IconActivity",
    "AlertOctagon": "IconAlertOctagon",
    "AlertTriangle": "IconAlertTriangle",
    "ArrowLeft": "IconArrowLeft",
    "Award": "IconAward",
    "Bell": "IconBell",
    "BookOpen": "IconBook",
    "Bot": "IconRobot",
    "Building2": "IconBuildingCommunity",
    "Calculator": "IconCalculator",
    "CheckCircle": "IconCircleCheck",
    "ChevronRight": "IconChevronRight",
    "ClipboardList": "IconClipboardList",
    "Clock": "IconClock",
    "Database": "IconDatabase",
    "Droplets": "IconDroplet",
    "Edit": "IconEdit",
    "Eye": "IconEye",
    "EyeOff": "IconEyeOff",
    "FileText": "IconFileText",
    "Flame": "IconFlame",
    "Globe": "IconGlobe",
    "GraduationCap": "IconSchool",
    "Home": "IconHome",
    "Image": "IconPhoto",
    "ImageIcon": "IconPhoto",
    "KeyRound": "IconKey",
    "Layout": "IconLayout",
    "Lock": "IconLock",
    "LogOut": "IconLogout",
    "Mail": "IconMail",
    "Map": "IconMap",
    "MapPin": "IconMapPin",
    "Menu": "IconMenu2",
    "Moon": "IconMoon",
    "Mountain": "IconMountain",
    "Orbit": "IconPlanet",
    "Phone": "IconPhone",
    "Play": "IconPlayerPlay",
    "Presentation": "IconPresentation",
    "Quote": "IconQuote",
    "Radar": "IconRadar",
    "Rocket": "IconRocket",
    "Satellite": "IconSatellite",
    "Send": "IconSend",
    "Settings": "IconSettings",
    "Shield": "IconShield",
    "ShieldAlert": "IconShieldExclamation",
    "ShieldCheck": "IconShieldCheck",
    "Sparkles": "IconSparkles",
    "Square": "IconSquare",
    "Sun": "IconSun",
    "Target": "IconTarget",
    "Trophy": "IconTrophy",
    "User": "IconUser",
    "Users": "IconUsers",
    "Video": "IconVideo",
    "Waves": "IconWaveSine",
    "Wind": "IconWind",
    "X": "IconX",
    "Zap": "IconBolt"
}

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the lucide-react import
    import_pattern = re.compile(r"import\s+\{([^}]+)\}\s+from\s+['\"]lucide-react['\"];?")
    match = import_pattern.search(content)
    if not match:
        return

    imports_str = match.group(1)
    # Extract imported names
    items = [x.strip() for x in imports_str.split(',')]
    
    tabler_imports = set()
    replace_map = {}
    
    for item in items:
        if not item: continue
        if ' as ' in item:
            parts = item.split(' as ')
            orig = parts[0].strip()
            alias = parts[1].strip()
            # The code uses `alias`, we want to replace `alias` with mapping[orig] or mapping[alias]
            tabler_name = mapping.get(orig, "Icon" + orig)
            replace_map[alias] = tabler_name
            tabler_imports.add(tabler_name)
        else:
            tabler_name = mapping.get(item, "Icon" + item)
            replace_map[item] = tabler_name
            tabler_imports.add(tabler_name)

    # Replace the import line
    new_import_line = "import { " + ", ".join(sorted(list(tabler_imports))) + " } from '@tabler/icons-react';"
    content = content[:match.start()] + new_import_line + content[match.end():]

    # Replace all occurrences in the file
    for lucide_name, tabler_name in replace_map.items():
        # Replace JSX tags <Icon ... /> or <Icon>
        content = re.sub(rf"<{lucide_name}\b", f"<{tabler_name}", content)
        content = re.sub(rf"</{lucide_name}>", f"</{tabler_name}>", content)
        # Replace occurrences as variables (like icon={IconName})
        content = re.sub(rf"\b{lucide_name}\b", tabler_name, content)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            process_file(os.path.join(root, file))

