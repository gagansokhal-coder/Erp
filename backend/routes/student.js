const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
let supabase = null;

if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
}

// Dummy data fallback
const demoAcademicData = {
    '22103053': [{ subject: 'DSA', attendance: 90, marks: 28 }, { subject: 'Maths', attendance: 87, marks: 30 }],
    '23103053': [{ subject: 'Physics', attendance: 70, marks: 20 }, { subject: 'Chemistry', attendance: 85, marks: 35 }],
    '24103053': [{ subject: 'Electrical', attendance: 95, marks: 38 }, { subject: 'Mechanics', attendance: 80, marks: 25 }],
    '25103053': [{ subject: 'Computer Networks', attendance: 88, marks: 32 }, { subject: 'Operating Systems', attendance: 92, marks: 36 }],
    
    '22103063': [{ subject: 'Data Structures', attendance: 85, marks: 31 }, { subject: 'Discrete Math', attendance: 80, marks: 29 }],
    '23103063': [{ subject: 'Algorithms', attendance: 91, marks: 34 }, { subject: 'Software Eng', attendance: 89, marks: 35 }],
    '24103063': [{ subject: 'Databases', attendance: 96, marks: 37 }, { subject: 'Machine Learning', attendance: 84, marks: 28 }],

    '22103054': [{ subject: 'Compiler Design', attendance: 82, marks: 30 }, { subject: 'Theory of Computation', attendance: 88, marks: 33 }],
    '23103054': [{ subject: 'AI', attendance: 94, marks: 38 }, { subject: 'Computer Vision', attendance: 90, marks: 34 }],
    '24103054': [{ subject: 'Cloud Computing', attendance: 87, marks: 32 }, { subject: 'Big Data', attendance: 85, marks: 31 }]
};

const demoProfiles = {
    // *53 Family - Gagandeep
    '22103053': { name: 'Gagandeep', rollNo: '22103053', branch: 'Computer Science', batch: '2026', cgpa: 8.5, photoUrl: '/53.png', fatherName: 'Manoj Kumar', motherName: 'Sushila Devi', mobile: '9465774926', officialEmail: 'gagandeep.cs.22@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '23103053': { name: 'Gagandeep', rollNo: '23103053', branch: 'Computer Science', batch: '2027', cgpa: 7.8, photoUrl: '/53.png', fatherName: 'Manoj Kumar', motherName: 'Sushila Devi', mobile: '9465774926', officialEmail: 'gagandeep.cs.23@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '24103053': { name: 'Gagandeep', rollNo: '24103053', branch: 'Computer Science', batch: '2028', cgpa: 9.1, photoUrl: '/53.png', fatherName: 'Manoj Kumar', motherName: 'Sushila Devi', mobile: '9465774926', officialEmail: 'gagandeep.cs.24@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '25103053': { name: 'Gagandeep', rollNo: '25103053', branch: 'Computer Science', batch: '2029', cgpa: 8.0, photoUrl: '/53.png', fatherName: 'Manoj Kumar', motherName: 'Sushila Devi', mobile: '9465774926', officialEmail: 'gagandeep.cs.25@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    
    // *63 Family - Harsh
    '22103063': { name: 'Harsh', rollNo: '22103063', branch: 'Computer Science', batch: '2026', cgpa: 8.2, photoUrl: '/63.png', fatherName: 'Bhagat Ram', motherName: 'Kanta Rani', mobile: '9592690166', officialEmail: 'harsh.cs.22@nitj.ac.in' },
    '23103063': { name: 'Harsh', rollNo: '23103063', branch: 'Computer Science', batch: '2027', cgpa: 8.4, photoUrl: '/63.png', fatherName: 'Bhagat Ram', motherName: 'Kanta Rani', mobile: '9592690166', officialEmail: 'harsh.cs.23@nitj.ac.in' },
    '24103063': { name: 'Harsh', rollNo: '24103063', branch: 'Computer Science', batch: '2028', cgpa: 8.7, photoUrl: '/63.png', fatherName: 'Bhagat Ram', motherName: 'Kanta Rani', mobile: '9592690166', officialEmail: 'harsh.cs.24@nitj.ac.in' },

    // *54 Family - Gopichand
    '22103054': { name: 'Gopichand', rollNo: '22103054', branch: 'Computer Science', batch: '2026', cgpa: 8.1, photoUrl: '/54.png', fatherName: 'Kalu Ram', motherName: 'Nirmala Devi', mobile: '9056264546', officialEmail: 'gopic.cs.22@nitj.ac.in' },
    '23103054': { name: 'Gopichand', rollNo: '23103054', branch: 'Computer Science', batch: '2027', cgpa: 8.3, photoUrl: '/54.png', fatherName: 'Kalu Ram', motherName: 'Nirmala Devi', mobile: '9056264546', officialEmail: 'gopic.cs.23@nitj.ac.in' },
    '24103054': { name: 'Gopichand', rollNo: '24103054', branch: 'Computer Science', batch: '2028', cgpa: 8.6, photoUrl: '/54.png', fatherName: 'Kalu Ram', motherName: 'Nirmala Devi', mobile: '9056264546', officialEmail: 'gopic.cs.24@nitj.ac.in' }
};

router.get('/academic/:rollNo', async (req, res) => {
    const { rollNo } = req.params;
    
    if (supabase) {
        try {
            const { data, error } = await supabase.from('academic').select('*').eq('roll_no', rollNo);
            if (error) throw error;
            if (!data || data.length === 0) {
                 return res.json(demoAcademicData[rollNo] || []);
            }
            return res.json(data);
        } catch (err) {
            return res.json(demoAcademicData[rollNo] || []);
        }
    } else {
        return res.json(demoAcademicData[rollNo] || []);
    }
});

router.get('/profile/:rollNo', async (req, res) => {
    const { rollNo } = req.params;
    
    if (supabase) {
        try {
            const { data, error } = await supabase.from('students').select('*').eq('roll_no', rollNo).single();
            if (error) throw error;
            if (!data) return res.json(demoProfiles[rollNo] || demoProfiles['22103053']);
            return res.json(data);
        } catch (err) {
            return res.json(demoProfiles[rollNo] || demoProfiles['22103053']);
        }
    } else {
        return res.json(demoProfiles[rollNo] || demoProfiles['22103053']);
    }
});

router.get('/photo/:rollNo', (req, res) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100" height="100" fill="#e2e8f0" />
      <circle cx="50" cy="40" r="20" fill="#94a3b8" />
      <path d="M 20 90 Q 50 60 80 90" fill="none" stroke="#94a3b8" stroke-width="15" stroke-linecap="round" />
    </svg>`;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(svg);
});

module.exports = router;
