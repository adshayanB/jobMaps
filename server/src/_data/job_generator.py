# Generate jobs for seeder
from bs4 import BeautifulSoup
import requests
import random
from lxml import html
company_names = []
job_titles = ['Software Engineer', 'Software Engineer Intern', 'Systems Designer', 'Robotics Specialist', 'Data Scientist', 'Machine Learning Intern']
reqstring = f'https://www.thomsonreuters.com/en/products-services/technology/top-100.html'
html_text = requests.get(reqstring).text
soup = BeautifulSoup(html_text, 'lxml')
jobs_table = soup.find(
    'table')
companies = jobs_table.find_all('tr')
for company in companies:
    company_td = company.find('td')
    if(company_td):
        if (company.find('td').find('a')):
            company_names.append(company.find('td').find('a').text)       
        else :
            company_names.append(company.find('td').text)

rand_company = random.sample(company_names, 10)
for company_name in rand_company:
    for i in range(random.randint(0,5)):
        print(f"""
        {{ "company": "{company_name}",\n
        "userId": "6101de3faf1974197ec25ef0",\n
        "jobTitle": "{job_titles[i]}",\n
        "status": "accepted"\n
        }},
        """)