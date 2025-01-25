ImmunoACT: Empowering Cancer Care

Welcome to the ImmunoACT repository! This project aims to support ImmunoACT's mission of providing cutting-edge cancer therapy solutions. The web application serves as a platform for managing critical information and resources for patients and healthcare professionals.

Table of Contents
About the Project
Features
Tech Stack
Getting Started
Deployment
Contributing
License

About the Project:
ImmunoACT is a healthcare company committed to curing cancer patients through innovative therapy solutions. This project is built with a modern tech stack to provide a robust and user-friendly platform for managing patient resources and company information.

Features:
Patient Resource Management: Organized and easily accessible information for patients and healthcare professionals.
Content Management: Integration with Sanity CMS for seamless content updates.
Responsive Design: Tailwind CSS ensures the application looks great on all devices.
Secure Asset Storage: Assets are securely stored in AWS S3 buckets.
AWS Deployment: The application is hosted on AWS, ensuring high availability and scalability.

Tech Stack:
Frontend: Next.js 15 with Tailwind CSS
CMS: Sanity
Deployment: AWS Elastic Beanstalk and AWS S3

Getting Started:
Prerequisites
Node.js (v16 or later)
npm or yarn
AWS account for deployment

Install dependencies:
npm install
# or
yarn install

Configure environment variables:
Create a .env.local file in the root directory and add the following:
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=your-sanity-dataset
AWS_S3_BUCKET_NAME=your-s3-bucket-name
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key

Run the development server:
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to see the application.

Deployment:
The project is deployed on AWS Elastic Beanstalk for the application backend and AWS S3 for storing assets. Follow these steps for deployment:

Build the project:
npm run build
# or
yarn build
Deploy to AWS Elastic Beanstalk using the AWS CLI or AWS Console.

Upload assets to AWS S3 bucket.
For detailed deployment steps, refer to the AWS Elastic Beanstalk documentation.

License:
This project is licensed under the MIT License.
