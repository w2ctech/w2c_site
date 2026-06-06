import Script from "next/script";

export default function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://w2ctech.com/#organization",
      name: "W2C Tech",
      alternateName: "w2ctech",
      legalName: "W2C Tech",
      url: "https://w2ctech.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://w2ctech.com/#logo",
        url: "https://w2ctech.com/assets/w2c-logo.png",
        contentUrl: "https://w2ctech.com/assets/w2c-logo.png",
        caption: "W2C Tech — Web to Cloud",
      },
      image: {
        "@type": "ImageObject",
        url: "https://w2ctech.com/assets/w2c-logo.png",
      },
      description:
        "Custom software, AI systems, and cloud — built to scale. W2C Tech is a software consulting company delivering custom software development, AI integration services, cloud architecture consulting, enterprise SaaS solutions, staff augmentation, search and data engineering, and digital transformation for ambitious companies across the EU, US and India. Founded 2020.",
      slogan:
        "Software, AI & cloud, built to scale with you.",
      keywords:
        "custom software development, software consulting company, software consultancy, software engineering firm, enterprise SaaS solutions, SaaS development, SaaS platform development, web application development, web app development, mobile app development, cross-platform app development, API development, API integration, full-stack development, frontend development, backend development, microservices architecture, serverless architecture, MVP development, startup software consulting, product engineering, custom product engineering, internal tools development, dashboard development, legacy system modernization, technical debt reduction, code review services, software architecture consulting, software architecture design, AI integration services, AI consulting, AI development company, artificial intelligence services, AI-enabled software, AI copilot development, AI agent development, chatbot development, LLM development, large language model integration, RAG application development, retrieval augmented generation, ML model development, machine learning consulting, machine learning services, deep learning, natural language processing, NLP, computer vision, AI strategy consulting, enterprise AI transformation, intelligent automation, AI automation, AI retrofitting, cloud architecture consulting, cloud consulting services, cloud migration services, cloud-native development, cloud infrastructure, cloud automation, DevOps consulting, DevOps services, DevOps as a service, CI/CD pipeline, continuous integration, continuous deployment, infrastructure as code, IaC, site reliability engineering, SRE consulting, cloud monitoring, observability, AWS consulting, GCP consulting, Google Cloud consulting, cloud cost optimization, managed cloud services, Docker, Kubernetes, container orchestration, search engineering, Elasticsearch consulting, Lucene development, vector search, semantic search, full-text search, relevance tuning, data engineering, data pipeline development, ETL development, data analytics, business intelligence, analytics and reporting, big data consulting, staff augmentation, IT staff augmentation, IT staffing services, dedicated development team, dedicated engineering squad, offshore software development, offshore development team, remote development team, freelance software developers, contract software engineers, vetted engineers, reskilled engineers, bench sales, vendor network, IT outsourcing, IT consulting, technology consulting, digital transformation consulting, technology strategy, architecture audit, software distribution, software reseller, IT procurement, technology advisory, IT solutions, digital agency, web design, web development, UI/UX design, responsive design, website development, website maintenance, digital marketing, SEO services, e-commerce development, marketplace platform development, fintech software, crypto analytics, retail software, sports commerce platform, luxury resale platform, sustainable commerce, B2B software, B2C software, SaaS product, enterprise software, custom web solutions, cloud solutions, software solutions, IT services, technology partner, software partner, web to cloud, w2c tech, w2ctech, generative AI, GenAI, GPT integration, OpenAI API integration, Anthropic Claude, Google Gemini, AI model fine-tuning, prompt engineering, MLOps, machine learning operations, vector database, text embeddings, multimodal AI, AI governance, responsible AI, AI ethics, AI safety, AI readiness assessment, predictive AI, AI pipeline, AI model deployment, AI model serving, AI inference, AI training, AI evaluation, AI monitoring, AI observability, AI SaaS, AI platform development, AI workflow, AI orchestration, conversational AI chatbot, voice AI, speech recognition, AI-powered search, AI-powered analytics, AI for business, enterprise AI platform, edge AI computing, cognitive AI services, multi-cloud architecture, hybrid cloud solutions, cloud security services, cloud compliance, cloud networking, VPC setup, cloud storage, CDN content delivery network, managed cloud databases, cloud functions, serverless functions, cloud load balancing, auto-scaling cloud, cloud backup, disaster recovery, Prometheus monitoring, Grafana dashboards, Datadog monitoring, cloud IAM, identity and access management, cloud governance, cloud FinOps, financial operations, platform engineering, GitOps deployment, ArgoCD, Terraform infrastructure, Pulumi, Ansible automation, cloud-native security, cloud landing zone, AWS well-architected, cloud center of excellence, cloud operations, Google Analytics 4, GA4 setup, Google Tag Manager, GTM implementation, Google Search Console, GSC verification, web analytics implementation, conversion tracking, event tracking, data layer, user behavior analytics, A/B testing, experimentation, marketing analytics, performance analytics, real-time analytics dashboard, Looker Studio, Google BigQuery, Mixpanel, Amplitude analytics, Hotjar, heatmaps, session recording, funnel analysis, cohort analysis, retention analytics, attribution modeling, marketing attribution, Facebook pixel, LinkedIn Insight Tag, Meta analytics, mobile app analytics, product analytics, growth analytics, SEO analytics, social media analytics, customer analytics, analytics implementation, analytics consulting, freelance software developer, contract software engineer, IT outsourcing company, offshore development company, nearshore software development, remote-first software team, technology consulting firm, IT solutions provider, digital transformation agency, AI consulting firm, cloud consulting company, SaaS consulting, software development agency, web development company, custom web development, bespoke software development",
      foundingDate: "2020",
      foundingLocation: {
        "@type": "Place",
        "@id": "https://w2ctech.com/#place-delhi",
        name: "Delhi, India",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressCountry: "IN",
        },
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 2,
        maxValue: 10,
      },
      email: "w2ctechsolution@gmail.com",
      telephone: "+91-XXXXXXXXXX",
      taxID: "09AADCW3276E1Z7",
      vatID: "09AADCW3276E1Z7",
      duns: "U72900UP2022PTC168187",
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "GA4 Measurement ID",
          name: "google_analytics_4",
          value: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
        },
        {
          "@type": "PropertyValue",
          propertyID: "Google Search Console Verification",
          name: "google_search_console",
          value: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
        },
        {
          "@type": "PropertyValue",
          propertyID: "Google Tag Manager",
          name: "google_tag_manager",
          value: process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXXXX",
        },
      ],
      knowsLanguage: ["English", "German", "French"],
      knowsAbout: [
        {
          "@type": "Thing",
          name: "Custom Software Development",
        },
        {
          "@type": "Thing",
          name: "Enterprise SaaS Solutions",
        },
        {
          "@type": "Thing",
          name: "Web Application Development",
        },
        {
          "@type": "Thing",
          name: "Mobile App Development",
        },
        {
          "@type": "Thing",
          name: "API Development and Integration",
        },
        {
          "@type": "Thing",
          name: "Full-Stack Development",
        },
        {
          "@type": "Thing",
          name: "Frontend Development",
        },
        {
          "@type": "Thing",
          name: "Backend Development",
        },
        {
          "@type": "Thing",
          name: "Microservices Architecture",
        },
        {
          "@type": "Thing",
          name: "Serverless Architecture",
        },
        {
          "@type": "Thing",
          name: "MVP Development",
        },
        {
          "@type": "Thing",
          name: "React",
        },
        {
          "@type": "Thing",
          name: "Next.js",
        },
        {
          "@type": "Thing",
          name: "Node.js",
        },
        {
          "@type": "Thing",
          name: "TypeScript",
        },
        {
          "@type": "Thing",
          name: "Python",
        },
        {
          "@type": "Thing",
          name: "Tailwind CSS",
        },
        {
          "@type": "Thing",
          name: "PostgreSQL",
        },
        {
          "@type": "Thing",
          name: "Artificial Intelligence",
        },
        {
          "@type": "Thing",
          name: "Machine Learning",
        },
        {
          "@type": "Thing",
          name: "Large Language Models (LLM)",
        },
        {
          "@type": "Thing",
          name: "Retrieval-Augmented Generation (RAG)",
        },
        {
          "@type": "Thing",
          name: "Deep Learning",
        },
        {
          "@type": "Thing",
          name: "Natural Language Processing (NLP)",
        },
        {
          "@type": "Thing",
          name: "AI Copilots and Agents",
        },
        {
          "@type": "Thing",
          name: "Chatbot Development",
        },
        {
          "@type": "Thing",
          name: "Intelligent Automation",
        },
        {
          "@type": "Thing",
          name: "Cloud Architecture",
        },
        {
          "@type": "Thing",
          name: "Cloud Migration",
        },
        {
          "@type": "Thing",
          name: "AWS",
        },
        {
          "@type": "Thing",
          name: "Google Cloud Platform (GCP)",
        },
        {
          "@type": "Thing",
          name: "DevOps",
        },
        {
          "@type": "Thing",
          name: "CI/CD",
        },
        {
          "@type": "Thing",
          name: "Infrastructure as Code (IaC)",
        },
        {
          "@type": "Thing",
          name: "Docker",
        },
        {
          "@type": "Thing",
          name: "Kubernetes",
        },
        {
          "@type": "Thing",
          name: "Site Reliability Engineering (SRE)",
        },
        {
          "@type": "Thing",
          name: "Elasticsearch",
        },
        {
          "@type": "Thing",
          name: "Apache Lucene",
        },
        {
          "@type": "Thing",
          name: "Vector Search",
        },
        {
          "@type": "Thing",
          name: "Semantic Search",
        },
        {
          "@type": "Thing",
          name: "Data Pipelines and ETL",
        },
        {
          "@type": "Thing",
          name: "Data Analytics",
        },
        {
          "@type": "Thing",
          name: "Business Intelligence",
        },
        {
          "@type": "Thing",
          name: "IT Staff Augmentation",
        },
        {
          "@type": "Thing",
          name: "Offshore Software Development",
        },
        {
          "@type": "Thing",
          name: "Remote Development Teams",
        },
        {
          "@type": "Thing",
          name: "Digital Transformation",
        },
        {
          "@type": "Thing",
          name: "Technology Strategy Consulting",
        },
        {
          "@type": "Thing",
          name: "Software Architecture Design",
        },
        {
          "@type": "Thing",
          name: "E-commerce Development",
        },
        {
          "@type": "Thing",
          name: "Marketplace Platform Development",
        },
        {
          "@type": "Thing",
          name: "UI/UX Design",
        },
        {
          "@type": "Thing",
          name: "Responsive Web Design",
        },
        {
          "@type": "Thing",
          name: "SEO (Search Engine Optimization)",
        },
        {
          "@type": "Thing",
          name: "Digital Marketing",
        },
        {
          "@type": "Thing",
          name: "Generative AI (GenAI)",
        },
        {
          "@type": "Thing",
          name: "GPT Integration",
        },
        {
          "@type": "Thing",
          name: "OpenAI API",
        },
        {
          "@type": "Thing",
          name: "Anthropic Claude",
        },
        {
          "@type": "Thing",
          name: "Google Gemini",
        },
        {
          "@type": "Thing",
          name: "AI Model Fine-Tuning",
        },
        {
          "@type": "Thing",
          name: "Prompt Engineering",
        },
        {
          "@type": "Thing",
          name: "MLOps (Machine Learning Operations)",
        },
        {
          "@type": "Thing",
          name: "Vector Databases",
        },
        {
          "@type": "Thing",
          name: "Text Embeddings",
        },
        {
          "@type": "Thing",
          name: "Multimodal AI",
        },
        {
          "@type": "Thing",
          name: "AI Governance",
        },
        {
          "@type": "Thing",
          name: "Responsible AI",
        },
        {
          "@type": "Thing",
          name: "AI Ethics and Safety",
        },
        {
          "@type": "Thing",
          name: "AI Readiness Assessment",
        },
        {
          "@type": "Thing",
          name: "Predictive AI",
        },
        {
          "@type": "Thing",
          name: "Cognitive Services",
        },
        {
          "@type": "Thing",
          name: "AI Pipeline Engineering",
        },
        {
          "@type": "Thing",
          name: "AI Model Deployment",
        },
        {
          "@type": "Thing",
          name: "AI Model Serving and Inference",
        },
        {
          "@type": "Thing",
          name: "AI Monitoring and Observability",
        },
        {
          "@type": "Thing",
          name: "AI SaaS Platform Development",
        },
        {
          "@type": "Thing",
          name: "Enterprise AI Solutions",
        },
        {
          "@type": "Thing",
          name: "AI Workflow Automation",
        },
        {
          "@type": "Thing",
          name: "Conversational AI",
        },
        {
          "@type": "Thing",
          name: "Speech Recognition and Voice AI",
        },
        {
          "@type": "Thing",
          name: "AI-Powered Search",
        },
        {
          "@type": "Thing",
          name: "AI-Powered Analytics",
        },
        {
          "@type": "Thing",
          name: "Edge AI",
        },
        {
          "@type": "Thing",
          name: "On-Device AI",
        },
        {
          "@type": "Thing",
          name: "Multi-Cloud Architecture",
        },
        {
          "@type": "Thing",
          name: "Hybrid Cloud Solutions",
        },
        {
          "@type": "Thing",
          name: "Cloud Security",
        },
        {
          "@type": "Thing",
          name: "Cloud Compliance",
        },
        {
          "@type": "Thing",
          name: "Cloud Networking and VPC",
        },
        {
          "@type": "Thing",
          name: "Cloud Storage Solutions",
        },
        {
          "@type": "Thing",
          name: "Content Delivery Network (CDN)",
        },
        {
          "@type": "Thing",
          name: "Managed Cloud Databases",
        },
        {
          "@type": "Thing",
          name: "Serverless Functions",
        },
        {
          "@type": "Thing",
          name: "Cloud Load Balancing",
        },
        {
          "@type": "Thing",
          name: "Auto-Scaling",
        },
        {
          "@type": "Thing",
          name: "Cloud Backup and Disaster Recovery",
        },
        {
          "@type": "Thing",
          name: "Prometheus",
        },
        {
          "@type": "Thing",
          name: "Grafana",
        },
        {
          "@type": "Thing",
          name: "Datadog",
        },
        {
          "@type": "Thing",
          name: "Cloud IAM (Identity and Access Management)",
        },
        {
          "@type": "Thing",
          name: "Cloud Governance",
        },
        {
          "@type": "Thing",
          name: "Cloud FinOps (Financial Operations)",
        },
        {
          "@type": "Thing",
          name: "Platform Engineering",
        },
        {
          "@type": "Thing",
          name: "GitOps",
        },
        {
          "@type": "Thing",
          name: "ArgoCD",
        },
        {
          "@type": "Thing",
          name: "Terraform",
        },
        {
          "@type": "Thing",
          name: "Pulumi",
        },
        {
          "@type": "Thing",
          name: "Ansible",
        },
        {
          "@type": "Thing",
          name: "Cloud-Native Security",
        },
        {
          "@type": "Thing",
          name: "Cloud Landing Zone",
        },
        {
          "@type": "Thing",
          name: "AWS Well-Architected Framework",
        },
        {
          "@type": "Thing",
          name: "Cloud Center of Excellence",
        },
        {
          "@type": "Thing",
          name: "Google Analytics 4 (GA4)",
        },
        {
          "@type": "Thing",
          name: "Google Tag Manager (GTM)",
        },
        {
          "@type": "Thing",
          name: "Google Search Console (GSC)",
        },
        {
          "@type": "Thing",
          name: "Web Analytics Implementation",
        },
        {
          "@type": "Thing",
          name: "Conversion Tracking",
        },
        {
          "@type": "Thing",
          name: "Event Tracking and Data Layer",
        },
        {
          "@type": "Thing",
          name: "User Behavior Analytics",
        },
        {
          "@type": "Thing",
          name: "A/B Testing and Experimentation",
        },
        {
          "@type": "Thing",
          name: "Marketing Analytics",
        },
        {
          "@type": "Thing",
          name: "Performance Analytics",
        },
        {
          "@type": "Thing",
          name: "Real-Time Analytics",
        },
        {
          "@type": "Thing",
          name: "Looker Studio",
        },
        {
          "@type": "Thing",
          name: "Google BigQuery",
        },
        {
          "@type": "Thing",
          name: "Mixpanel Analytics",
        },
        {
          "@type": "Thing",
          name: "Amplitude Analytics",
        },
        {
          "@type": "Thing",
          name: "Hotjar Heatmaps and Session Recording",
        },
        {
          "@type": "Thing",
          name: "Funnel Analysis",
        },
        {
          "@type": "Thing",
          name: "Cohort Analysis",
        },
        {
          "@type": "Thing",
          name: "Retention Analytics",
        },
        {
          "@type": "Thing",
          name: "Attribution Modeling",
        },
        {
          "@type": "Thing",
          name: "Marketing Attribution",
        },
        {
          "@type": "Thing",
          name: "Facebook Pixel",
        },
        {
          "@type": "Thing",
          name: "LinkedIn Insight Tag",
        },
        {
          "@type": "Thing",
          name: "Meta Analytics",
        },
        {
          "@type": "Thing",
          name: "Mobile App Analytics",
        },
        {
          "@type": "Thing",
          name: "Product Analytics",
        },
        {
          "@type": "Thing",
          name: "Growth Analytics",
        },
        {
          "@type": "Thing",
          name: "SEO Analytics",
        },
        {
          "@type": "Thing",
          name: "Social Media Analytics",
        },
        {
          "@type": "Thing",
          name: "Customer Analytics",
        },
        {
          "@type": "Thing",
          name: "Analytics Dashboard Development",
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "Germany",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Continent",
          name: "European Union",
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "G-4/38, Block-G, Rohini Sector 15",
          addressLocality: "Delhi",
          postalCode: "110089",
          addressRegion: "DL",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Brooktorkai 4",
          addressLocality: "Hamburg",
          postalCode: "20457",
          addressCountry: "DE",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "4400 Chavenelle Rd",
          addressLocality: "Dubuque",
          addressRegion: "IA",
          postalCode: "52002",
          addressCountry: "US",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "w2ctechsolution@gmail.com",
          availableLanguage: ["English", "German", "French"],
          contactOption: "https://calendly.com/w2ctechsolution/consultation",
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "info@w2ctech.com",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://twitter.com/w2ctech",
        "https://facebook.com/w2ctech",
        "https://linkedin.com/company/w2ctech",
      ],
      founder: [
        {
          "@type": "Person",
          name: "Yogendra Singh",
          jobTitle: "Director",
          description:
            "14+ years across the IT industry — leading delivery, client partnerships and the engineering vision behind W2C.",
        },
        {
          "@type": "Person",
          name: "Bishwajeet Biswas",
          jobTitle: "Director — Cloud",
          description:
            "Heads the cloud and infrastructure practice, turning Web to Cloud from a tagline into production systems.",
        },
        {
          "@type": "Person",
          name: "Ekta Singh",
          jobTitle: "Senior HR Specialist",
          description:
            "Leads people and talent — building the bench, the culture and the vendor network that staffs every project.",
        },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Dedicated Team",
          description:
            "A self-managed squad that works as an extension of your org — ideal for long-term products and ongoing software development, cloud infrastructure, or AI projects. Monthly engagement for dedicated software engineering teams, offshore development, and remote squads.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            unitText: "per month",
          },
        },
        {
          "@type": "Offer",
          name: "Staff Augmentation",
          description:
            "Reskilled, vetted software engineers who slot into your existing team and process, scaling up or down on demand. Transparent per-hour billing for IT staff augmentation, freelance software developers, contract engineers, and dedicated squads through our trusted vendor network.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            unitText: "per hour",
          },
        },
        {
          "@type": "Offer",
          name: "Fixed Project",
          description:
            "Defined scope, timeline and price — best when requirements are clear and outcomes are concrete. Fixed-price software development, MVP builds, SaaS platform launches, cloud migrations, and AI integration projects with predictable delivery.",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            unitText: "per project",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        "@id": "https://w2ctech.com/#services",
        name: "Software Engineering & AI Consulting Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Software & SaaS Solutions",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#software-saas",
                  name: "Custom Software Development & Enterprise SaaS Solutions",
                  description:
                    "Custom product engineering and custom software development, end to end. We design and build enterprise SaaS platforms, web applications, mobile apps, internal tools, dashboards, and REST APIs that are clean to maintain and ready to grow. Our full-stack software engineering covers frontend development with React, Next.js, TypeScript, and Tailwind CSS, backend development with Node.js and Python, database design with PostgreSQL, microservices architecture, serverless architecture, API development and system integration, cross-platform application development, MVP development for startups, legacy system modernization, technical debt reduction, code review services, and software architecture consulting — built to last and built to scale.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "Custom Software Development & SaaS Engineering",
                  category: "Software Development",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Software Development Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SaaS Platform Development",
                          description:
                            "End-to-end SaaS product engineering — multi-tenant architecture, subscription billing, user management, and scalable cloud deployment for B2B and B2C SaaS platforms.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Application Development",
                          description:
                            "Custom web app development with React, Next.js, TypeScript, and modern frontend frameworks. Responsive design, progressive web apps, and high-performance web applications.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Mobile & Cross-Platform App Development",
                          description:
                            "Cross-platform mobile application development for iOS and Android. React Native and modern mobile frameworks for consistent user experiences.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "API Development & System Integration",
                          description:
                            "REST API and GraphQL development, third-party API integration, microservices design, and system-to-system integration for enterprise software ecosystems.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Internal Tools & Dashboard Development",
                          description:
                            "Custom internal tools, admin dashboards, operations panels, and business intelligence dashboards tailored to your team's workflow.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "MVP Development for Startups",
                          description:
                            "Rapid MVP development for startups — take your idea from concept to production with a lean, scalable codebase built by senior software engineers.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Legacy System Modernization",
                          description:
                            "Modernize legacy applications — migrate monolithic systems to microservices, upgrade outdated frameworks, and reduce technical debt.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "E-commerce & Marketplace Development",
                          description:
                            "Custom e-commerce platforms, online marketplace development, resale platforms, multi-vendor marketplaces, and retail commerce solutions.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI Systems & AI-Enabled Software",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#ai-systems",
                  name: "AI Integration Services & AI-Enabled Software Development",
                  description:
                    "AI where it earns its keep. We build LLM-powered features, ML models, deep learning solutions, and intelligent automation — and retrofit AI into the software you already run. Our AI and machine learning services include large language model integration, RAG application development, retrieval augmented generation, natural language processing, NLP solutions, computer vision, AI copilot and AI agent development, chatbot development, fine-tuning models, AI strategy consulting, enterprise AI transformation, and AI built into every layer — not bolted on after. Python-based ML tooling, modern AI frameworks, and production-grade AI deployment for real business impact.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "AI Development & Integration Services",
                  category: "Artificial Intelligence",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "AI & Machine Learning Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "LLM & RAG Application Development",
                          description:
                            "Build applications powered by large language models with retrieval-augmented generation for accurate, context-aware AI responses. Custom LLM integration into your existing software products.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "ML Model Development & Data Products",
                          description:
                            "Custom machine learning model development, training, fine-tuning, and deployment. ML-powered data products for predictive analytics, recommendations, and classification.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "AI Copilots & AI Agents",
                          description:
                            "Build intelligent AI copilots and autonomous AI agents that automate workflows, assist users, and augment human decision-making within your software.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Chatbot & Conversational AI Development",
                          description:
                            "Custom chatbot development and conversational AI solutions for customer support, lead generation, and user engagement powered by NLP and LLMs.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "AI Strategy & Consulting",
                          description:
                            "AI strategy consulting — identify high-impact AI use cases, build an AI roadmap, evaluate build-vs-buy decisions, and plan enterprise AI transformation.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Intelligent Automation & AI Retrofitting",
                          description:
                            "Intelligent process automation and AI retrofitting — embed AI capabilities into your existing software systems, automate manual workflows, and enhance legacy applications with AI.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Cloud & DevOps",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#cloud-devops",
                  name: "Cloud Architecture Consulting & DevOps Engineering",
                  description:
                    "The 'to Cloud' in Web to Cloud. Cloud migration services, cloud-native architecture design, CI/CD pipeline automation, DevOps consulting, and reliability engineering that keeps your systems fast and always on. We provide infrastructure as code, IaC, Docker containerization, Kubernetes orchestration, monitoring and observability, site reliability engineering, SRE, cloud cost optimization, managed cloud services on AWS and Google Cloud Platform, GCP, and cloud automation for scalable, resilient deployments. From startup cloud setup to enterprise cloud migration — we deliver production-grade cloud infrastructure.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "Cloud Consulting & DevOps Services",
                  category: "Cloud Architecture Consulting",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Cloud & DevOps Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cloud Migration Services",
                          description:
                            "End-to-end cloud migration — lift-and-shift, re-platforming, and re-architecting applications for AWS and Google Cloud Platform. Minimize downtime, optimize costs.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cloud-Native Architecture",
                          description:
                            "Design and implement cloud-native architectures using microservices, serverless computing, container orchestration with Docker and Kubernetes, and managed cloud services.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "CI/CD & DevOps Automation",
                          description:
                            "Continuous integration and continuous deployment pipeline setup, DevOps automation, GitOps workflows, automated testing, and deployment automation for fast, reliable releases.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Infrastructure as Code (IaC)",
                          description:
                            "Infrastructure as code using Terraform, Pulumi, CloudFormation — version-controlled, reproducible, and auditable cloud infrastructure provisioning.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Monitoring, Observability & SRE",
                          description:
                            "Site reliability engineering, monitoring and observability setup — logging, metrics, tracing, alerting, incident response, and SLI/SLO/SLA definition for production systems.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Cloud Cost Optimization",
                          description:
                            "Cloud cost analysis and optimization — right-sizing resources, reserved instances, spot instances, and architectural changes to reduce your cloud bill.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Search & Data Engineering",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#search-data",
                  name: "Search & Data Engineering Services",
                  description:
                    "Findability at scale. Lucene development, Elasticsearch consulting, and modern vector search and semantic search — combined with AI to deliver relevance your users actually feel. Our data engineering services include data pipeline development, ETL, extract transform load, data analytics, business intelligence, reporting and analytics, full-text search engine implementation, relevance tuning, search ranking optimization, and big data consulting for data-driven organizations processing large-scale datasets.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "Search & Data Engineering Services",
                  category: "Search & Data Engineering",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Search & Data Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Elasticsearch & Lucene Development",
                          description:
                            "Custom Elasticsearch and Apache Lucene implementation — search engine setup, index design, query optimization, relevance tuning, and full-text search for applications and websites.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Vector & Semantic Search",
                          description:
                            "Modern vector search and semantic search — AI-powered search that understands meaning, not just keywords. Embedding-based retrieval, hybrid search combining lexical and semantic approaches.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Data Pipeline & ETL Development",
                          description:
                            "Data pipeline development and ETL — extract, transform, load workflows for data ingestion, processing, and warehousing. Batch and real-time data processing.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Analytics, BI & Reporting",
                          description:
                            "Data analytics, business intelligence dashboards, custom reporting solutions, and data visualization — turn raw data into actionable business insights.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Staff Augmentation & IT Staffing",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#staff-augmentation",
                  name: "IT Staff Augmentation, Dedicated Engineering Squads & Offshore Software Development",
                  description:
                    "The right people, fast — on transparent per-hour billing. Vetted, continuously reskilled engineers and full dedicated squads that embed in your team, backed by our trusted vendor network. We provide IT staff augmentation, offshore software development teams, remote development teams, freelance software developers, contract software engineers, dedicated development teams, bench sales, and IT staffing services. Our engineers cover full-stack development, AI and machine learning, cloud and DevOps, search engineering, and more. Scale-as-you-go billing, flexible staffing models, and no long-term lock-in — hire senior software engineers, AI engineers, cloud engineers, and data engineers on demand across India, EU, and US time zones.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "IT Staff Augmentation & Offshore Development",
                  category: "IT Staff Augmentation",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Staff Augmentation Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Dedicated Engineering Squads",
                          description:
                            "Self-managed, dedicated development teams that work as an extension of your organization — full-stack engineers, AI/ML engineers, cloud engineers, and data engineers for long-term product development.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Individual Staff Augmentation",
                          description:
                            "Vetted, reskilled individual software engineers who slot into your existing team and process — scaling up or down on demand with transparent per-hour billing.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Offshore & Remote Development Teams",
                          description:
                            "Offshore software development and remote engineering teams — cost-effective, senior talent working in your time zone from India, EU, or US offices.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Freelance & Contract Software Engineers",
                          description:
                            "Freelance software developers and contract software engineers — flexible, on-demand access to senior full-stack, AI, cloud, and data engineering talent through our trusted vendor network.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Bench Sales & IT Staffing",
                          description:
                            "Bench sales and IT staffing services — connect with pre-vetted, available software engineers, AI specialists, cloud architects, and data engineers ready to deploy on short notice.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Technical Recruiting & Talent Sourcing",
                          description:
                            "Technical recruiter services — source, screen, and place senior software engineers, AI/ML engineers, cloud/DevOps engineers, and search engineers for your open roles.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "IT Consulting & Digital Transformation",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": "https://w2ctech.com/services#it-consulting",
                  name: "IT Consulting, Digital Transformation & Software Distribution",
                  description:
                    "Direction before delivery. Technology strategy consulting, architecture audits, software distribution, and digital transformation services to get the right systems into the right hands. We help businesses modernize their technology stack with impartial, expert IT consulting advice — covering technology advisory, software procurement, IT solutions architecture, digital transformation strategy, enterprise software evaluation, build-vs-buy analysis, and software reseller partnerships. From startup technology roadmaps to enterprise digital transformation initiatives, we provide the strategic guidance you need before a single line of code is written.",
                  provider: { "@id": "https://w2ctech.com/#organization" },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "Country", name: "Germany" },
                    { "@type": "Country", name: "United States" },
                  ],
                  serviceType: "IT Consulting & Digital Transformation",
                  category: "IT Consulting & Digital Transformation",
                  termsOfService: "https://w2ctech.com/terms-of-service",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "IT Consulting Capabilities",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Technology Strategy Consulting",
                          description:
                            "Strategic technology advisory — define your technology roadmap, evaluate build-vs-buy decisions, select the right tech stack, and align technology investments with business goals.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Architecture Audits & Reviews",
                          description:
                            "Comprehensive software architecture audits and code reviews — identify bottlenecks, security vulnerabilities, scalability risks, and technical debt in your existing systems.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Software Distribution & Reseller Services",
                          description:
                            "Software distribution partnerships and reseller services — get the right enterprise software tools and platforms into your organization through our trusted software vendor network.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Digital Transformation Consulting",
                          description:
                            "End-to-end digital transformation consulting — modernize business processes, adopt cloud and AI technologies, digitize operations, and transform legacy organizations into technology-enabled enterprises.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "IT Procurement & Technology Advisory",
                          description:
                            "IT procurement advisory — evaluate, select, and procure software, cloud services, SaaS tools, and IT infrastructure with impartial, vendor-neutral guidance.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Design, SEO & Digital Marketing",
                          description:
                            "Professional web design, responsive website development, SEO services, search engine optimization, and digital marketing strategy to grow your online presence and generate leads.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Analytics & Tracking Implementation",
                          description:
                            "Google Analytics 4, GA4 setup and configuration, Google Tag Manager, GTM implementation, Google Search Console, GSC integration, conversion tracking, event tracking, data layer architecture, custom analytics dashboards, Looker Studio reports, BigQuery data warehouse, user behavior analytics, Facebook pixel and LinkedIn Insight Tag implementation, marketing attribution, funnel analysis, cohort analysis, and end-to-end analytics strategy for data-driven decision making.",
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        ],
      },
      audience: [
        {
          "@type": "BusinessAudience",
          name: "Startups & Early-Stage Companies",
          description:
            "MVP development, startup software consulting, and lean product engineering for early-stage companies looking to build their first product or scale from prototype to production.",
        },
        {
          "@type": "BusinessAudience",
          name: "Mid-Market & Growth Companies",
          description:
            "Enterprise SaaS solutions, cloud migration, AI integration, and staff augmentation for growing companies that need senior engineering talent to scale their technology and teams.",
        },
        {
          "@type": "BusinessAudience",
          name: "Enterprise & Large Organizations",
          description:
            "Digital transformation, legacy system modernization, technology strategy consulting, architecture audits, and dedicated engineering squads for large enterprises across EU, US, and India.",
        },
        {
          "@type": "BusinessAudience",
          name: "E-commerce & Marketplace Platforms",
          description:
            "Custom marketplace platform development, resale platforms, multi-vendor e-commerce, sports commerce, luxury resale platforms, and retail software solutions for online marketplace businesses.",
        },
        {
          "@type": "BusinessAudience",
          name: "Analytics & Data-Driven Organizations",
          description:
            "Data engineering, analytics, business intelligence, search engineering, Elasticsearch implementation, and data pipeline development for organizations that rely on data products and insights.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://w2ctech.com/#website",
      url: "https://w2ctech.com",
      name: "W2C Tech — Web to Cloud | Custom Software Development, AI & Cloud Consulting",
      description:
        "W2C Tech is a software consulting company offering custom software development, AI integration services, cloud architecture consulting, enterprise SaaS solutions, staff augmentation, search and data engineering, and digital transformation — serving ambitious companies across the EU, US and India.",
      inLanguage: ["en", "de", "fr"],
      publisher: { "@id": "https://w2ctech.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://w2ctech.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://w2ctech.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://w2ctech.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://w2ctech.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: "https://w2ctech.com/about",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Careers",
          item: "https://w2ctech.com/careers",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Contact",
          item: "https://w2ctech.com/contact",
        },
      ],
    },
  ];

  return (
    <Script
      id="structured-data"
      strategy="beforeInteractive"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
