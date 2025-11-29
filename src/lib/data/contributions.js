// src/lib/data/contributions.js

export const contributions = [
    {
        project: 'Smart Door System',
        link: 'https://gitlab.com/StanaAndrei/si',
        description: [
            "Form the embedded systems course me and my team created a smart door system where admin register other users(picture and some generic data about them) and give them access based on different criteria like role, time interval, temporary access in different rooms(where the smart door is installed).",
            "We used a mini-camera, 2 piezo sensors(front and back), leds for access granted/denied signaling and a magnetic lock with a relay for high voltage actuary.",
        ],
        technologies: ["Python", "FastAPI", 'Vue', 'RaspberryPI', 'Electronics', 'CV']
    },
    {
        project: 'Data Sci 4 Data Sci',
        link: 'https://github.com/AndreiMuciu/Datascilibs',
        description: [
            "Contributed to a uni lab project for data sci",
            'This is a data sci project which aggregates stats about other data sci gh repos',
            'My role was contributing to data acquiring and populating a mongodb cluster with it',
        ],
        technologies: ["Python", "FastAPI", 'Data Science', 'Statistics', 'MongoDB']
    },
    {
        project: 'Bible analytics',
        link: 'https://gitlab.com/StanaAndrei/data-sci-bible',
        description: [
            "Contributed to a data science project which purpose is to analyse the Holy Bible(for a uni exam)",
            'My role was to web scrape data and get valuable and intersting insights',
        ],
        technologies: ["Python", "DL", 'NLP', 'Statistics', 'Bsoup', 'networkx', 'n-grams', 'pandas']
    },
    {
        project: 'Simso',
        link: 'https://github.com/StanaAndrei/simso-gui',
        description: [
            "Created a personal fork of the simso & simso-gui(from INSA Tolouse)",
            'added the possibility to create, save and load custom tasks',
            'added used reflection to inject the dynamic behaviour of the custom task at runtime',
            'added the possibility to enable/disable metaheuristic when using priority schedulers',
            'added the possibility to generate random sets of tasks based on certain parameters (e.g. uniform distribution)'
        ],
        technologies: ["Python", "PyQT", 'Scheduling algorithms', 'Meta heuristics']
    }
];