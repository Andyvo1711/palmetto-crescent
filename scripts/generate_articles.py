import os
import random
import re

random.seed(42)

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "content", "articles")
os.makedirs(OUT_DIR, exist_ok=True)

def slugify(s):
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")

# ---------- shared SC place/entity pools ----------
CITIES = [
    "Charleston", "Columbia", "Greenville", "Spartanburg", "Myrtle Beach",
    "Hilton Head Island", "Rock Hill", "Florence", "Beaufort", "Mount Pleasant",
    "North Charleston", "Summerville", "Aiken", "Greenwood", "Anderson",
]

# ================= EDUCATION =================
EDU_SCHOOLS = [
    "the University of South Carolina", "Clemson University", "the College of Charleston",
    "Furman University", "Winthrop University", "The Citadel", "Coastal Carolina University",
    "the Medical University of South Carolina", "Francis Marion University",
    "South Carolina State University", "Charleston Southern University",
]
EDU_DISTRICTS = [
    "Charleston County School District", "Greenville County Schools",
    "Richland School District One", "Beaufort County School District",
    "Horry County Schools", "Spartanburg School District Five", "Lexington School District One",
]
EDU_TEMPLATES = [
    ("{school} Opens New STEM Building in {city}",
     "A new laboratory and maker-space complex adds capacity for engineering and data science students."),
    ("{district} Expands Dual-Enrollment Program with {school}",
     "High schoolers across {city} will be able to earn college credit before graduation under the expanded partnership."),
    ("{school} Launches Scholarship Fund for First-Generation Students",
     "The new fund aims to cover tuition gaps for students from {city} and surrounding counties."),
    ("Teacher Shortage Eases in {district} After Statewide Recruitment Push",
     "New signing bonuses and housing stipends are helping {district} fill classroom vacancies ahead of the school year."),
    ("{school} Breaks Ground on Student Housing Near {city} Campus",
     "The project is designed to ease an off-campus rental crunch that has pushed students further from class."),
    ("Literacy Scores Rise Across {district} Elementary Schools",
     "Early reading intervention programs are showing measurable gains among third graders in {city}."),
    ("{school} Adds Workforce-Ready Certificate Tracks in Advanced Manufacturing",
     "The new two-year tracks are built with input from employers across the {city} corridor."),
    ("{district} Rolls Out Free Community College Partnership",
     "Graduating seniors in {city} can now attend two years of technical college tuition-free."),
    ("{school} Researchers Secure Federal Grant for Coastal Resilience Study",
     "The multi-year grant will fund student research on flooding and erosion along the South Carolina coast."),
    ("New Career Center Opens for {district} High School Students",
     "The center in {city} offers hands-on training in healthcare, welding, and computer science."),
]

# ================= HEALTHCARE =================
HEALTH_SYSTEMS = [
    "Prisma Health", "MUSC Health", "Roper St. Francis Healthcare", "Bon Secours St. Francis",
    "AnMed Health", "McLeod Health", "Self Regional Healthcare", "Tidelands Health",
    "Beaufort Memorial Hospital", "Spartanburg Regional Healthcare System",
]
HEALTH_TEMPLATES = [
    ("{system} Opens New Emergency Department in {city}",
     "The expanded facility is designed to cut wait times as the {city} area continues to grow."),
    ("{system} Expands Telehealth Access for Rural Patients",
     "Patients in outlying communities near {city} can now see specialists without a long drive."),
    ("{system} Breaks Ground on Cancer Treatment Center in {city}",
     "The new center will bring radiation and infusion therapy closer to patients on the {city} side of the region."),
    ("Maternal Health Program Expands at {system}",
     "The initiative pairs new mothers in {city} with nurse navigators through the first year after birth."),
    ("{system} Adds Mental Health Beds Amid Rising Demand",
     "The expansion in {city} responds to a statewide shortage of inpatient psychiatric capacity."),
    ("{system} Launches Mobile Clinic for Underserved Neighborhoods",
     "The van-based clinic will rotate through {city} neighborhoods with limited access to primary care."),
    ("Heart Health Screenings Offered Free Across {city} This Fall",
     "{system} is partnering with local churches and community centers to reach residents who lack a regular doctor."),
    ("{system} Recruits Additional Primary Care Physicians for {city}",
     "The hiring push aims to shorten appointment wait times that have stretched past a month in some clinics."),
    ("{system} Upgrades Neonatal Intensive Care Unit",
     "The renovated unit in {city} adds private rooms for families of premature infants."),
    ("Diabetes Prevention Program Reaches Milestone in {city}",
     "{system} reports hundreds of residents have completed the yearlong lifestyle-change course."),
]

# ================= BUSINESS LEADERS (fictional people/companies) =================
BIZ_FIRST = ["Marcus", "Elena", "Devon", "Priya", "Caleb", "Simone", "Wesley", "Renata", "Julian", "Ashley", "Tobias", "Camille"]
BIZ_LAST = ["Whitfield", "Sarno", "Okafor", "Beaumont", "Rutledge", "Castellanos", "Pruitt", "Alvarez", "Kingsley", "Marsh"]
BIZ_COMPANIES = [
    "Lowland Robotics", "Palmetto Fintech Labs", "Tidewater Logistics Group", "Cypress Grove Foods",
    "Harborline Shipping Partners", "Sweetgrass Analytics", "Foothills Advanced Materials",
    "Blue Heron Biotech", "Carolina Timberworks", "Marsh & Main Hospitality", "Indigo Ridge Ventures",
    "Coastal Grid Energy",
]
BIZ_TEMPLATES = [
    ("{name} Named CEO of {company} in {city}",
     "{name} steps into the role as {company} plans an expansion of its {city} operations."),
    ("{company} to Add 200 Jobs at New {city} Facility",
     "Founder {name} says the expansion reflects growing demand for the company's work along the coast."),
    ("{name} of {company} Named to Statewide Business Council",
     "{name} will advise on workforce development policy affecting employers across South Carolina."),
    ("{company} Relocates Headquarters to {city}",
     "CEO {name} cited access to talent and the port as key reasons for the move."),
    ("{name} Launches {company} to Tackle Supply Chain Bottlenecks",
     "The {city}-based startup has already signed its first regional manufacturing clients."),
    ("{company} Founder {name} Wins Regional Entrepreneur of the Year",
     "The award recognizes {name}'s work building {company} into one of {city}'s fastest-growing employers."),
    ("{name} Steps Down as {company} Chair After a Decade of Growth",
     "{name} says a successor from within the {city} leadership team will take over next quarter."),
    ("{company} Opens Innovation Lab in Downtown {city}",
     "{name}, the company's chief executive, says the lab will focus on logistics and clean-energy technology."),
    ("{name} Named to Forbes-Style Regional 40 Under 40 List",
     "{name} built {company} from a two-person office in {city} into a regional employer."),
    ("{company} Signs Long-Term Lease at {city} Business Park",
     "{name} says the move will roughly double the company's workforce over the next three years."),
]

# ================= FINANCE & ECONOMY =================
FIN_TEMPLATES = [
    ("Port of Charleston Reports Record Cargo Volume",
     "The South Carolina Ports Authority says container traffic climbed again this quarter, driven by manufacturing exports."),
    ("{city} Home Prices Cool After Two-Year Run-Up",
     "Real estate agents in {city} say inventory is finally catching up with buyer demand."),
    ("South Carolina Unemployment Holds Near Record Low",
     "State labor officials point to continued hiring in manufacturing and logistics around {city}."),
    ("Small Business Lending Rises Across the Upstate",
     "Community banks in {city} report a jump in loan applications from first-time business owners."),
    ("Tourism Spending Sets New Record Along the Grand Strand",
     "Visitor spending in {city} topped last year's total, according to the state tourism office."),
    ("State Budget Adds Funding for Rural Broadband",
     "Lawmakers say the investment will bring high-speed internet to unserved pockets near {city}."),
    ("Manufacturing Jobs Grow as Suppliers Expand Near {city}",
     "New supplier contracts are drawing additional investment to the {city} industrial corridor."),
    ("Agriculture Exports Climb for South Carolina Peach Growers",
     "Growers near {city} say demand from new export markets has softened last year's weather losses."),
    ("Housing Starts Pick Up in {city} Suburbs",
     "Builders point to steady in-migration as a key driver of new construction permits."),
    ("Inflation Eases for South Carolina Households, State Economists Say",
     "Grocery and fuel costs in the {city} area have leveled off after two years of sharp increases."),
    ("Workforce Housing Fund Announced for Coastal Counties",
     "The fund targets service workers priced out of {city} amid rising rents."),
    ("State Revenue Collections Beat Forecast for Third Straight Quarter",
     "Economists cite steady consumer spending in {city} and across the Midlands."),
]

# ================= BEAUTY & WELLNESS =================
WELL_PLACES = [
    "Lowcountry Spa & Salon", "Marsh Tide Wellness", "Sweetgrass Skin Studio", "Harbor Light Day Spa",
    "Palmetto Row Salon", "Indigo Bloom Wellness Collective", "Tidewater Yoga & Massage",
    "Cypress & Sage Spa", "Foothills Float & Wellness", "Seabrook Beauty Bar", "Magnolia Row Med Spa",
    "Rivermont Wellness Studio",
]
WELL_TEMPLATES = [
    ("{place} Opens Second Location in {city}",
     "Owners say demand from residents and visitors alike pushed the expansion into {city}."),
    ("{place} Adds Med-Spa Services to {city} Menu",
     "The new offerings include facials and skin treatments led by a licensed aesthetician."),
    ("{city} Wellness Studios See Surge in Interest After New Year",
     "{place} reports a wait list for morning classes as residents lean into healthier routines."),
    ("{place} Hosts Free Community Wellness Day in {city}",
     "The event offered chair massages, skincare consultations, and stress-relief workshops."),
    ("Sustainable Beauty Trend Grows Among {city} Salons",
     "{place} is among a growing number of shops switching to refillable and low-waste product lines."),
    ("{place} Introduces Membership Model for {city} Regulars",
     "The subscription plan bundles massage, facials, and skincare at a flat monthly rate."),
    ("{city} Spa Season Kicks Off Early as Visitors Return",
     "{place} says bookings are already ahead of last year's pace heading into the warmer months."),
    ("{place} Trains New Class of Estheticians in {city}",
     "The in-house apprenticeship program aims to ease a regional shortage of licensed skincare professionals."),
    ("{place} Debuts Coastal-Inspired Treatment Line",
     "The new line uses local sea salt and sweetgrass extract sourced near {city}."),
    ("{city} Wellness Retreat Draws Visitors From Across the Southeast",
     "{place} says weekend bookings have tripled since the retreat program launched last year."),
]

BODY_PARAGRAPHS_EDU = [
    "The announcement comes as South Carolina schools continue to recover enrollment and staffing levels that dipped in recent years. Administrators say the investment reflects a broader push to modernize facilities across the state.",
    "Local families welcomed the news, saying it signals long-term commitment to the community. Several parents at a recent town hall said they hoped the changes would also ease overcrowding in nearby classrooms.",
    "State education officials have pointed to similar projects elsewhere in South Carolina as evidence that targeted investment can move the needle on both enrollment and outcomes.",
    "Funding for the project draws on a mix of state appropriations, local bond measures, and private donations, according to officials familiar with the plan.",
    "Organizers say they expect the full rollout to be complete within the next two academic years, with interim milestones reviewed each semester.",
]

BODY_PARAGRAPHS_HEALTH = [
    "Hospital administrators say the expansion is part of a broader strategy to keep pace with population growth across the region, which has outpaced the addition of new medical facilities in recent years.",
    "Patients and staff both stand to benefit, according to hospital leadership, who cited shorter wait times and reduced strain on existing departments as immediate goals.",
    "The project follows similar investments by health systems elsewhere in South Carolina as providers compete for both patients and clinical staff in a tight labor market.",
    "State health officials have highlighted access to care in growing suburban and coastal communities as a priority area heading into the next budget cycle.",
    "Officials say they will track patient outcomes and wait times over the coming year to evaluate the impact of the changes.",
]

BODY_PARAGRAPHS_BIZ = [
    "The move comes amid a wave of corporate relocations and expansions across South Carolina, as companies cite the state's workforce, tax incentives, and logistics access as key draws.",
    "Local economic development officials welcomed the announcement, noting that it adds to a growing list of employers choosing to grow in the region rather than elsewhere in the Southeast.",
    "Industry analysts say the company's growth reflects broader momentum in South Carolina's manufacturing and logistics sectors, which have expanded steadily over the past several years.",
    "Company leadership says the decision was shaped in part by proximity to the Port of Charleston and access to a growing pool of technical graduates from state universities.",
    "The company plans to share more details on hiring timelines and community partnerships in the coming months.",
]

BODY_PARAGRAPHS_FIN = [
    "Economists say the trend is consistent with broader patterns across the Southeast, where population growth continues to outpace many other regions of the country.",
    "State officials caution that national conditions, including interest rates and federal policy, could still shift the outlook in the months ahead.",
    "Business groups in the region say the data reflects steady, if unspectacular, growth rather than a boom, which several officials described as a healthier long-term pattern.",
    "Local leaders say they are watching housing affordability closely, since rapid growth in some counties has begun to strain infrastructure and workforce housing supply.",
    "The figures were released as part of a regular quarterly report tracking employment, housing, and consumer activity across South Carolina.",
]

BODY_PARAGRAPHS_WELL = [
    "Owners say the wellness industry in South Carolina has grown steadily as both residents and visitors prioritize self-care alongside more traditional beauty services.",
    "The shift mirrors a national trend toward wellness-focused spending, with local shops adapting their offerings to match changing customer expectations.",
    "Staff say demand tends to peak during the spring and summer tourist season, though a growing base of local regulars has smoothed out seasonal swings.",
    "Industry groups note that South Carolina's wellness and personal-care sector has added jobs steadily over the past several years, outpacing some other retail categories.",
    "Owners say they plan to expand their team and service offerings if current demand holds through the end of the year.",
]

CATEGORY_CONFIG = {
    "education": {
        "templates": EDU_TEMPLATES,
        "fill": lambda: {"school": random.choice(EDU_SCHOOLS), "district": random.choice(EDU_DISTRICTS), "city": random.choice(CITIES)},
        "body": BODY_PARAGRAPHS_EDU,
        "img_topic": "university,classroom,library,campus,graduation",
    },
    "healthcare": {
        "templates": HEALTH_TEMPLATES,
        "fill": lambda: {"system": random.choice(HEALTH_SYSTEMS), "city": random.choice(CITIES)},
        "body": BODY_PARAGRAPHS_HEALTH,
        "img_topic": "hospital,doctor,medical,nurse,clinic",
    },
    "business-leaders": {
        "templates": BIZ_TEMPLATES,
        "fill": lambda: {"name": f"{random.choice(BIZ_FIRST)} {random.choice(BIZ_LAST)}", "company": random.choice(BIZ_COMPANIES), "city": random.choice(CITIES)},
        "body": BODY_PARAGRAPHS_BIZ,
        "img_topic": "office,business,executive,meeting,skyline",
    },
    "finance-economy": {
        "templates": FIN_TEMPLATES,
        "fill": lambda: {"city": random.choice(CITIES)},
        "body": BODY_PARAGRAPHS_FIN,
        "img_topic": "finance,economy,port,skyline,market",
    },
    "beauty-wellness": {
        "templates": WELL_TEMPLATES,
        "fill": lambda: {"place": random.choice(WELL_PLACES), "city": random.choice(CITIES)},
        "body": BODY_PARAGRAPHS_WELL,
        "img_topic": "spa,wellness,skincare,yoga,salon",
    },
}

DATES_2026 = [f"2026-{m:02d}-{d:02d}" for m in range(1, 8) for d in (3, 9, 14, 21, 27) if not (m == 7 and d > 20)]
DATES_2025 = ["2025-09-12", "2025-10-08", "2025-11-15", "2025-12-02"]

IMAGE_CREDITS = [
    "Photo: Lorem Picsum (Unsplash-sourced stock library)",
]

used_slugs = set()

def make_article(category, index, seed_offset):
    cfg = CATEGORY_CONFIG[category]
    template_title, template_excerpt = cfg["templates"][index % len(cfg["templates"])]
    fields = cfg["fill"]()
    title = template_title.format(**fields)
    excerpt = template_excerpt.format(**fields)

    base_slug = slugify(title)
    slug = base_slug
    n = 2
    while slug in used_slugs:
        slug = f"{base_slug}-{n}"
        n += 1
    used_slugs.add(slug)

    is_2025 = index < 3  # first few per category get 2025 dates for depth
    date = DATES_2025[index % len(DATES_2025)] if is_2025 else DATES_2026[(index + seed_offset) % len(DATES_2026)]

    featured = index == 0  # first article generated per category is that category's featured pick

    seed = abs(hash(slug)) % 10000
    img_url = f"https://picsum.photos/seed/{category}-{seed}/1600/900"

    dateline_city = fields.get("city", "COLUMBIA").upper()
    paragraphs = random.sample(cfg["body"], 3)
    body_md = f"{dateline_city}, S.C. — {excerpt}\n\n" + "\n\n".join(paragraphs)
    body_md += f"\n\n## What Comes Next\n\nOfficials say the coming months will be a key test of whether the momentum described above holds up. Community members in {fields.get('city', 'the area')} are encouraged to follow updates as more details become available.\n"

    frontmatter = f"""---
title: "{title.replace('"', '\\"')}"
slug: "{slug}"
excerpt: "{excerpt.replace('"', '\\"')}"
category: "{category}"
date: "{date}"
coverImage: "{img_url}"
featured: {"true" if featured else "false"}
imageCredit: "{random.choice(IMAGE_CREDITS)}"
---

{body_md}
"""

    path = os.path.join(OUT_DIR, f"{slug}.md")
    with open(path, "w", encoding="utf-8") as f:
        f.write(frontmatter)
    return slug

def main():
    total = 0
    counts = {}
    for cat_i, category in enumerate(CATEGORY_CONFIG.keys()):
        n_articles = 15 if cat_i % 2 == 0 else 14  # yields 15/14/15/14/15 = 73
        for i in range(n_articles):
            make_article(category, i, seed_offset=cat_i * 3)
            total += 1
        counts[category] = n_articles
    print("Generated", total, "articles")
    for c, n in counts.items():
        print(f"  {c}: {n}")

if __name__ == "__main__":
    main()
