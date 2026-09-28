'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title>
          ZALORA Group | Aug 2025 - Present
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Data Engineer </strong>
          <li> Migrated and owned ~50 data pipelines from legacy Jenkins to Cloud Composer (Airflow), improving reliability and observability through centralized scheduling, automatic retries, and failure alerting.</li>
          <li> Decommissioned a Cloud SQL PostgreSQL instance by moving downstream workloads to query BigQuery directly, cutting infrastructure costs by ~800 USD/month (9,600 USD/year).</li>
          <li> Partnered with the Finance team to automate monthly reporting workflows, reducing processing time from 2 days to 30 minutes and eliminating nearly 2 days of manual work per cycle.</li>
          <li> Redesigned pipelines and dbt models to be easier to maintain, reducing BigQuery costs by ~100 USD/month.</li>
          <li> Extended dbt models to support evolving requirements across the finance department, adding tests and documentation to improve data quality.</li>
          <li> Managed Cloud Composer environments and BigQuery role-based access control as code with Terraform, ensuring consistent and auditable permissions.</li>
          <li className='list-none mt-1'><strong className='text-white'>Technologies:</strong> Python, SQL, dbt, BigQuery, Airflow (Cloud Composer), Terraform, GCP</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>
          7-Eleven | Sep 2024 - Aug 2025
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Fresher Data Engineer </strong>
          <li> Developed real-time pipelines that consumed data from Kafka and transformed it in-place with ClickHouse.</li>
          <li> Designed and implemented Airflow jobs using Pandas to batch process large datasets, including automated notifications to Google Chat for job errors, missing data, or inactive Kafka consumer groups.</li>
          <li> Utilized App Script and n8n to integrate with external services such as Google, Jira for seamless data flow and automation.</li>
          <li> Developed a chatbot for generating insights from Superset data using OpenAI API.</li>
          <li> Enabled real-time replication from PostgreSQL using logical replication and Airbyte CDC.</li>
          <li> Utilized DataHub to document, monitor, and manage data pipelines, enhancing pipeline visibility, data lineage tracking, and collaboration across teams.</li>
          <li className='list-none mt-1'><strong className='text-white'>Technologies:</strong> ClickHouse, Airflow, Pandas, Kafka, App Script, Apache Superset, OpenAI API, Airbyte, DataHub</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>
          TC Data | Jun 2024 - Sep 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Trainee Data Engineer </strong>
          <li> Develop modules using SQL Server to help stakeholders meet their data needs.</li>
          <li> Engage in discussions with stakeholders to thoroughly verify and understand the issues present in the data.</li>
          <li className='list-none mt-1'><strong className='text-white'>Technologies:</strong> SQL Server, T-SQL, Power Automate</li>
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>
          Inter-K JSC | Nov 2023 - Jan 2024
        </TimelineEvent.Title>

        <TimelineEvent.Description>
          <strong className='text-white'> Intern Data Engineer </strong>
          <li> Converted approximately 100 SAP crystal reports into paginated reports using PowerBI Report Builder.</li>
          <li> Provided guidance to counterparts on the utilization of the PowerBI Report Builder.</li>
          <li className='list-none mt-1'><strong className='text-white'>Technologies:</strong> PowerBI Report Builder, Crystal Reports, DAX, Gitlab</li>
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;
