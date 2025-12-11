import React, { useState, useEffect } from 'react';
import './App.css';

// Phase data structure
const phaseData = {
  menstrual: {
    name: 'Menstrual Phase',
    days: '1-7',
    color: '#FFB5C2',
    secondary: '#FFF0F3',
    accent: '#FF6B9D',
    tone: 'gentle and comforting',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake & Soft Start',
        icon: '🌅',
        description: 'Good morning, lovely! Take it slow today. Your body is doing important work.',
        tasks: [
          'Drink a big glass of water beside your bed',
          'Open blinds or step to a window for 3–5 minutes of light',
          'Quick warm shower or bath to relax cramps',
          'Light stretch: neck rolls, cat-cow, hip circles (5–10 min)',
          'Warm, easy breakfast (oats with milk/protein, or toast with paneer/tofu)',
          'Portions: Protein 1 palm; Carbs 1 handful; Fats 1 thumb; Veggies/fruit 1 fist'
        ]
      },
      {
        time: '09:00–11:00',
        title: 'Career Block 1',
        icon: '💼',
        description: 'One focused task is plenty today. Quality over quantity.',
        tasks: [
          'One focused session for applications or portfolio work',
          'Use a lo-fi or focus playlist',
          'Keep only necessary tabs open',
          'Goal: 1–2 good applications, not perfection'
        ]
      },
      {
        time: '11:00–12:30',
        title: 'Gentle Midday',
        icon: '🚶‍♀️',
        description: 'Time to move gently and nourish yourself.',
        tasks: [
          'Snack: yogurt + fruit + nuts or a small sandwich',
          'Short 10–15 minute walk, even indoors',
          'Finish 1st water bottle (~800–900 ml) by now'
        ]
      },
      {
        time: '12:30–14:00',
        title: 'Lunch & Rest',
        icon: '🍽️',
        description: 'Warm, comforting food and a moment to pause.',
        tasks: [
          'Warm meal: dal, rice, veggies, yogurt or khichdi',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1 thumb',
          'Eat away from laptop when possible',
          'Phone down for first few minutes'
        ]
      },
      {
        time: '14:00–16:00',
        title: 'Flexible Block',
        icon: '📋',
        description: 'Light admin or rest—you choose what feels right.',
        tasks: [
          'Option A: Light admin (emails, organizing files, checking tracker)',
          'Option B: Rest, nap (20–30 min), gentle reading',
          'One tiny thing is enough today',
          'Complete 2nd water bottle by 17:00 (~1.6–1.8 L total)'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Movement Time',
        icon: '🏃‍♀️',
        description: 'Move in whatever way feels good to your body right now.',
        tasks: [
          'If energy okay: shortened gym session (reduce 1 set, lighter weights)',
          'If energy low: 20–30 min gentle walk or easy swim',
          'Minimum win: 10–15 minutes movement and stretching'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Unwind',
        icon: '🍜',
        description: 'Warm, nourishing food and time to decompress.',
        tasks: [
          'Warm dinner: rice + dal + sabzi, or tofu stir-fry with noodles',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1 handful; Fat 1 thumb',
          'Avoid very salty/greasy foods to reduce bloating',
          'Finish 3rd water bottle by ~21:00 (~2.4–2.7 L total)'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Evening Rituals',
        icon: '🛁',
        description: 'Second bath and soothing rituals to close the day.',
        tasks: [
          'Second bath/shower to relax muscles',
          'Skincare and body lotion as grounding ritual',
          'Light stretching or yoga (5–10 min) if body wants it'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Wind-down & Sleep',
        icon: '🌙',
        description: 'Let your mind and body rest. You did enough today.',
        tasks: [
          'No more applications or intense screens',
          'Brain-dump racing thoughts onto paper',
          'Dim lights, cosy clothes, herbal tea (caffeine-free)',
          'Short journaling: "What did I manage today?"',
          'In bed between 22:30–23:30'
        ]
      }
    ]
  },
  follicular: {
    name: 'Late Follicular Phase',
    days: '8-13',
    color: '#FFE066',
    secondary: '#FFF9E5',
    accent: '#FFC700',
    tone: 'energetic and building',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake, Water, Bath',
        icon: '☀️',
        description: 'Good morning! Your energy is building. Let\'s make the most of it!',
        tasks: [
          'Big glass of water and open blinds for light',
          'Short morning shower or bath',
          'Dynamic stretch: 5–10 squats, arm circles, hip openers',
          'Higher protein breakfast (Greek yogurt + fruit + granola, or tofu scramble + toast)',
          'Portions: Protein 1–2 palms; Carbs 1–2 handfuls; Fats 1 thumb; Veg/fruit 1–2 fists'
        ]
      },
      {
        time: '08:30–10:30',
        title: 'Career Block 1',
        icon: '🚀',
        description: 'Deep work time! Your brain is sharp—use this window wisely.',
        tasks: [
          'Main application/portfolio block of the day',
          'Target: 2–3 strong applications or one major project chunk',
          'No phone except during short breaks'
        ]
      },
      {
        time: '10:30–12:00',
        title: 'Snack & Walk',
        icon: '🥗',
        description: 'Quick break to recharge.',
        tasks: [
          'Snack: hummus with veg/crackers, nuts + fruit, or protein bar',
          'Short 10–15 minute walk to clear head',
          'Finish most of 1st water bottle by 12:00'
        ]
      },
      {
        time: '12:00–13:30',
        title: 'Lunch',
        icon: '🥙',
        description: 'Fuel up with a colorful, balanced meal.',
        tasks: [
          'Big, colorful bowl: veggies + whole grains + plant protein',
          'Example: quinoa, tofu/paneer, roast veg, tahini/yogurt dressing',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1–2 thumbs'
        ]
      },
      {
        time: '13:30–15:30',
        title: 'Career Block 2',
        icon: '💻',
        description: 'Networking, updates, or study time.',
        tasks: [
          'Networking emails, LinkedIn updates, school work',
          'If brain feels tired: swap to reading or creative tasks',
          'Minimum: 45–60 minutes of focus',
          'Complete 2nd water bottle (~1.6–1.8 L total)'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Gym: Full Session',
        icon: '💪',
        description: 'Time for your full workout! Your body is ready.',
        tasks: [
          'Follow programmed workout for today',
          'Keep rest periods 60–90 seconds',
          'Focus on form, track weight increases',
          'Pre-gym snack: banana, dates, or toast with peanut butter'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Chill',
        icon: '🍲',
        description: 'Post-workout refuel and relaxation.',
        tasks: [
          'Dinner: stir-fry tofu/tempeh + veg + rice/noodles; or dal, sabzi, chapati',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1 thumb',
          'Finish 3rd water bottle by ~21:00 (2.5–3 L total)'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Gentle Evening',
        icon: '✨',
        description: 'Wind down and separate day from night.',
        tasks: [
          'Light tidy of room/desk',
          'Second bath/shower; cosy clothes',
          'No serious work after this point'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Wind-down & Sleep',
        icon: '🌜',
        description: 'Protect your sleep even when energy is high.',
        tasks: [
          'Screen dimming or blue-light filter',
          'Write tomorrow\'s top 3 tasks',
          'Journal: one win, one gratitude, one thing to move forward',
          'In bed by ~23:00'
        ]
      }
    ]
  },
  ovulatory: {
    name: 'Ovulatory / Early Luteal',
    days: '14-21',
    color: '#A8E6CF',
    secondary: '#F0FFF7',
    accent: '#56C596',
    tone: 'confident and social',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Wake & Check-In',
        icon: '🌟',
        description: 'How\'s your energy today? Let\'s check in with yourself.',
        tasks: [
          'Water and light as usual',
          'Quick body scan: "Energy from 1–10?"',
          'Short bath or shower',
          'Breakfast: smoothie with protein + fruit + seeds, or avocado toast + tofu',
          'Portions: Protein 1–2 palms; Carbs 1–2 handfuls; Fats 1–2 thumbs; Veg/fruit 1–2 fists'
        ]
      },
      {
        time: '08:30–10:30',
        title: 'Power Focus',
        icon: '⚡',
        description: 'Use your sharp focus and confidence!',
        tasks: [
          'Deep project work: applications needing thought, portfolio edits, test tasks',
          'Use sharper focus in this window',
          '1–2 high-quality outputs vs. many shallow ones'
        ]
      },
      {
        time: '10:30–12:00',
        title: 'Walk & Tasks',
        icon: '🚶',
        description: 'Movement and light admin.',
        tasks: [
          '10–15 minute walk or mobility',
          'Respond to easy emails or set up calls/interviews',
          'Finish 1st water bottle by lunch'
        ]
      },
      {
        time: '12:00–13:30',
        title: 'Lunch',
        icon: '🥣',
        description: 'Balanced meal with extra complex carbs.',
        tasks: [
          'Extra complex carbs to support upcoming luteal phase',
          'Example: chickpea salad + veg + bread; or brown rice, dal, mixed sabzi',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 2 handfuls; Fat 1 thumb'
        ]
      },
      {
        time: '13:30–15:30',
        title: 'Outreach & Social',
        icon: '📧',
        description: 'Perfect time for networking and connection.',
        tasks: [
          'Networking messages, follow-ups, LinkedIn posts',
          'Emails to professors or mentors',
          'If energy dips: shorten to 60 min, rest instead'
        ]
      },
      {
        time: '16:00–17:30',
        title: 'Training or Cardio',
        icon: '🏋️',
        description: 'Strong workout or cardio—you\'ve got this!',
        tasks: [
          'Strong gym day or cardio',
          'Keep intensity but avoid ego lifting—prioritise form',
          'Cardio/swim: steady pace, moderate intensity',
          'Pre-workout snack: fruit + nuts or yogurt'
        ]
      },
      {
        time: '17:30–19:30',
        title: 'Dinner & Soft Landing',
        icon: '🍛',
        description: 'Nourish and notice any mood/sleep shifts.',
        tasks: [
          'Dinner: tofu/tempeh stir-fry, dal + sabzi, or veg + grain bowl',
          'Complete 3rd water bottle by 21:00 (2.5–3 L total)',
          'Notice if mood or sleep start shifting'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Gentle Reset',
        icon: '🛀',
        description: 'Second bath as a mental switch-off.',
        tasks: [
          'Second bath/shower; hard mental switch-off',
          'Skincare, comfy clothes, soft lighting',
          'Short stretch or walk if body feels restless'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Gentle Evening',
        icon: '🌙',
        description: 'Ease into rest mode.',
        tasks: [
          'Avoid deep career spirals or heavy conversations',
          'Journal: "What do I need more of? What less of heading toward PMS?"',
          'In bed ~22:30–23:00'
        ]
      }
    ]
  },
  luteal: {
    name: 'Late Luteal / PMS',
    days: '22-28',
    color: '#C9B4E8',
    secondary: '#F5F0FF',
    accent: '#9B7BC7',
    tone: 'compassionate and minimal',
    steps: [
      {
        time: '07:30–08:30',
        title: 'Slow Wake',
        icon: '🌤️',
        description: 'Take it slow today. Gentle is the goal.',
        tasks: [
          'Water and light, but softer start',
          'Short bath/shower if it feels good',
          'Breakfast: calm energy foods (oats, chia pudding, toast + paneer/tofu)',
          'Portions: Protein 1–2 palms; Carbs 1–2 handfuls; Fats 1 thumb; Veg/fruit 1 fist'
        ]
      },
      {
        time: '09:00–10:30',
        title: 'Bare-Minimum Win',
        icon: '🎯',
        description: 'One priority is enough today.',
        tasks: [
          'Choose ONE main priority: 1–2 applications or one email chain',
          'No multi-tasking',
          'Declare success once that one thing is done',
          'If focus low: 3 x 20 min bursts with 5 min breaks'
        ]
      },
      {
        time: '10:30–12:00',
        title: 'Decompress',
        icon: '🌸',
        description: 'Light movement and gentle snacking.',
        tasks: [
          'Short walk (10–15 min) or gentle stretching',
          'Snack: protein + healthy fat (nuts + fruit, yogurt, hummus)',
          'Finish 1st water bottle, sipping not chugging'
        ]
      },
      {
        time: '12:00–13:30',
        title: 'Lunch',
        icon: '🍲',
        description: 'Warm, comforting food.',
        tasks: [
          'Warm food: khichdi, soup + bread, dal + rice, veggie stew',
          'Portions: Veggies 2 fists; Protein 1–2 palms; Carbs 1–2 handfuls; Fat 1 thumb',
          'Keep salty/ultra-processed foods moderate'
        ]
      },
      {
        time: '13:30–15:30',
        title: 'Optional Light Block',
        icon: '📝',
        description: 'Admin only—or rest if you need it.',
        tasks: [
          'Admin only: file organization, tracking, prepping docs',
          'If body says no: rest, read, or something soothing',
          'Finish 2nd water bottle (~1.6–1.8 L total)'
        ]
      },
      {
        time: '16:00–17:00',
        title: 'Gentle Movement',
        icon: '🧘',
        description: 'Low-impact only today.',
        tasks: [
          'Minimum: 10–20 min low-impact (walk, dance, cycling, yoga)',
          'If gym: switch to machines, reduce weight and sets',
          'Skip heavy compound lifts if joints feel unstable'
        ]
      },
      {
        time: '17:00–19:30',
        title: 'Dinner & Soft Evening',
        icon: '🍜',
        description: 'Warm, satisfying dinner and cravings management.',
        tasks: [
          'Dinner: warm, satisfying, not too heavy/oily',
          'If cravings: pair sweets with protein/fiber (chocolate + nuts)',
          'Finish 3rd water bottle by ~21:00, including herbal teas'
        ]
      },
      {
        time: '19:30–21:00',
        title: 'Comfort Ritual',
        icon: '💜',
        description: 'Extra comfort for cramps and emotions.',
        tasks: [
          'Second bath/long shower for cramps; warm water',
          'Comfy clothes, favorite blanket, cosy show/reading',
          'Minimal stimulation: avoid emotional social media'
        ]
      },
      {
        time: '21:00–23:00',
        title: 'Grounding & Sleep',
        icon: '🌛',
        description: 'You\'re doing great. Lower output is normal.',
        tasks: [
          'Longer wind-down: 30+ min away from screens',
          'Grounding: 5 see, 4 touch, 3 hear, 2 smell, 1 taste',
          'Remind: lower output this week is normal, not a flaw',
          'In bed ~22:30–23:30; calm breathing if cramps wake you'
        ]
      }
    ]
  }
};

// Gym schedules by life stage
const gymSchedules = {
  young: {
    'Sunday': {
      name: 'Push Day',
      icon: '💪',
      exercises: [
        'Incline Smith Press: 3 sets x 4–6 reps',
        'Overhead Shoulder Press: 3 sets x 4–7 reps',
        'Machine reverse flies or Chest fly: 3 sets x 6–8 reps',
        'Overhead tricep extensions: 3 sets x 6–8 reps',
        'Cable tricep pushdowns: 2 sets x 6–8 reps'
      ]
    },
    'Monday': {
      name: 'Pull Day',
      icon: '🔙',
      exercises: [
        'Lat Pulldown: 3 sets x 6–8 reps',
        'T-Bar Rows: 3 sets x 4–8 reps',
        'Tucked Cable Rows: 3 sets x 6–8 reps',
        'Preacher dumbbell curls: 3 sets x 6–8 reps',
        'Core: leg raises: 3 sets x 8 reps',
        'Core: cable crunches: 3 sets x 8 reps'
      ]
    },
    'Tuesday': {
      name: 'Glutes & Hamstrings',
      icon: '🍑',
      exercises: [
        'Reverse leg curls: 3 sets x 6–8 reps',
        'Romanian deadlifts: 3 sets x 6–8 reps',
        'Smith machine squats (feet forward): 4 sets x 6–8 reps',
        'Hip thrusts: 4 sets x 6–8 reps'
      ]
    },
    'Wednesday': {
      name: 'Cardio Day',
      icon: '🏊',
      exercises: [
        'Swim at steady, comfortable pace (30-45 min)'
      ]
    },
    'Thursday': {
      name: 'Quad Day',
      icon: '🦵',
      exercises: [
        'Bulgarian squats: 3 sets x 6–8 reps',
        'Smith machine squats (normal stance): 3 sets x 6–8 reps',
        'Leg extensions: 4 sets x 6–8 reps',
        'Calf raises: 4 sets x 6–8 reps',
        'Optional core at the end'
      ]
    },
    'Friday': {
      name: 'Active Rest',
      icon: '🚶‍♀️',
      exercises: [
        'Easy walk (30–60 min) or light yoga'
      ]
    },
    'Saturday': {
      name: 'Fun Movement',
      icon: '🏓',
      exercises: [
        'Pickleball, dance, or any enjoyable activity'
      ]
    }
  },
  perimenopause: {
    'Sunday': {
      name: 'Lower Body + Core',
      icon: '🦵',
      exercises: [
        'Squats or Chair Sit-to-Stand: 2-3 sets x 8-12 reps',
        'Dumbbell Romanian Deadlift: 2-3 sets x 8-12 reps',
        'Step-Ups (low bench): 2-3 sets x 8-10 reps each leg',
        'Static Lunge: 2-3 sets x 8 reps each leg',
        'Calf Raises: 2 sets x 12-15 reps',
        'Dead Bugs: 2 sets x 8-10 each side',
        'Side Plank: 15-30 sec each side'
      ]
    },
    'Monday': {
      name: 'Cardio + Mobility',
      icon: '🚴‍♀️',
      exercises: [
        'Brisk walk or cycling: 25-35 min (moderate pace)',
        'Hip flexor stretch',
        'Hamstring stretch',
        'Chest opener against wall',
        'Gentle spinal twists'
      ]
    },
    'Tuesday': {
      name: 'Upper Body + Core',
      icon: '💪',
      exercises: [
        'Incline Push-Ups: 2-3 sets x 8-12 reps',
        'Dumbbell Chest Press: 2-3 sets x 8-12 reps',
        'Dumbbell Row: 2-3 sets x 8-12 reps',
        'Seated Shoulder Press: 2-3 sets x 8-10 reps',
        'Biceps Curls: 2 sets x 10-12 reps',
        'Triceps Pushdowns: 2 sets x 10-12 reps',
        'Bird Dogs: 2 sets x 8-10 each side'
      ]
    },
    'Wednesday': {
      name: 'Cardio / Fun Movement',
      icon: '🏊',
      exercises: [
        '30-45 min walk, cycling, or swimming',
        'Dance class or pickleball (optional)'
      ]
    },
    'Thursday': {
      name: 'Full-Body Strength',
      icon: '🏋️‍♀️',
      exercises: [
        'Goblet Squat: 2-3 sets x 8-10 reps',
        'Hip Thrust: 2-3 sets x 10-12 reps',
        'Dumbbell Row: 2-3 sets x 8-12 reps',
        'Dumbbell Chest Press: 2-3 sets x 8-12 reps',
        'Dumbbell RDL: 2-3 sets x 8-10 reps',
        'Pallof Press: 2 sets x 10-12 each side'
      ]
    },
    'Friday': {
      name: 'Gentle Movement',
      icon: '🧘‍♀️',
      exercises: [
        '20-30 min easy walk or yoga',
        'Light stretching',
        'Optional gentle core work'
      ]
    },
    'Saturday': {
      name: 'Rest or Light Activity',
      icon: '☁️',
      exercises: [
        'Full rest or short gentle walk if feeling good',
        'Focus on recovery and hydration'
      ]
    }
  }
};

function App() {
  const [currentView, setCurrentView] = useState('intro');
  const [pathway, setPathway] = useState('');
  const [cycleDay, setCycleDay] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [currentPhase, setCurrentPhase] = useState(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [workoutCheckboxes, setWorkoutCheckboxes] = useState({});

  // Auto-detect today's day on mount
  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    setWeekDay(days[today]);

    // Load saved session if exists
    const savedSession = localStorage.getItem('dailyFlowSession');
    if (savedSession) {
      const session = JSON.parse(savedSession);
      setPathway(session.pathway || '');
      setCycleDay(session.cycleDay || '');
      setWeekDay(session.currentDay || days[today]);
      setCurrentPhase(session.currentPhase);
      setCurrentStepIndex(session.currentStepIndex || 0);
      setCompletedSteps(session.completedSteps || []);
      if (session.currentPhase) {
        setCurrentView('app');
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (currentPhase) {
      const state = {
        pathway,
        cycleDay,
        currentDay: weekDay,
        currentPhase,
        currentStepIndex,
        completedSteps,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('dailyFlowSession', JSON.stringify(state));
    }
  }, [pathway, cycleDay, weekDay, currentPhase, currentStepIndex, completedSteps]);

  const getPhase = (day) => {
    if (day >= 1 && day <= 7) return 'menstrual';
    if (day >= 8 && day <= 13) return 'follicular';
    if (day >= 14 && day <= 21) return 'ovulatory';
    if (day >= 22 && day <= 28) return 'luteal';
    return 'menstrual';
  };

  const getGymSchedule = () => {
    if (pathway === 'young-flexible' || pathway === 'young-work') {
      return gymSchedules.young;
    } else if (pathway === 'peri-work' || pathway === 'peri-retired') {
      return gymSchedules.perimenopause;
    }
    return gymSchedules.young;
  };

  const getAdaptedSteps = (phaseSteps) => {
    const isWorkingPath = (pathway === 'young-work' || pathway === 'peri-work');

    if (!isWorkingPath) {
      return phaseSteps;
    }

    // Working schedule - modify steps to include 8-hour work block
    return phaseSteps.map((step, index) => {
      if (index === 0) return step;

      if (step.title.includes('Career Block 1') || step.title.includes('Power Focus')) {
        return {
          time: '09:00–17:00',
          title: 'Work Day',
          icon: '💼',
          description: 'Your 8-hour work day. Take breaks, stay hydrated, and be gentle with yourself.',
          tasks: [
            'Morning: Focus on priority tasks when energy is highest',
            'Midday snack: Keep protein + healthy snacks at desk',
            'Lunch break: Step away from desk, eat mindfully (12:00-13:00)',
            'Afternoon: Meetings, emails, lighter tasks',
            'Take short 5-min movement breaks every 90 minutes',
            'Drink water consistently: finish 2 bottles during work hours',
            'If working from home: Change location for lunch, get sunlight'
          ]
        };
      }

      if (step.title.includes('Snack & Walk') ||
          step.title.includes('Lunch') ||
          step.title.includes('Career Block 2') ||
          step.title.includes('Outreach & Social') ||
          step.title.includes('Gentle Midday') ||
          step.title.includes('Flexible Block') ||
          step.title.includes('Walk & Tasks') ||
          step.title.includes('Decompress') ||
          step.title.includes('Bare-Minimum Win') ||
          step.title.includes('Optional Light Block')) {
        return null;
      }

      if (step.title.includes('Movement Time') || step.title.includes('Gym') || step.title.includes('Training')) {
        return {
          ...step,
          time: '17:30–18:30',
          description: 'Post-work movement. ' + step.description
        };
      }

      if (step.title.includes('Dinner')) {
        return {
          ...step,
          time: '18:30–20:00'
        };
      }

      if (step.title.includes('Evening') && !step.title.includes('Wind-down')) {
        return {
          ...step,
          time: '20:00–21:00'
        };
      }

      return step;
    }).filter(step => step !== null);
  };

  const handleStartApp = () => {
    const day = parseInt(cycleDay);
    if (!day || day < 1 || day > 28 || !weekDay || !pathway) {
      alert('Please fill in all fields!');
      return;
    }

    const phase = getPhase(day);
    setCurrentPhase(phase);
    setCurrentView('app');
    setCurrentStepIndex(0);
    setCompletedSteps([]);
  };

  const handleCompleteStep = () => {
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
    }

    const phase = phaseData[currentPhase];
    const adaptedSteps = getAdaptedSteps(phase.steps);

    if (currentStepIndex < adaptedSteps.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex(currentStepIndex + 1);
      }, 2500);
    } else {
      setCurrentView('completion');
    }
  };

  const handleSkipStep = () => {
    const phase = phaseData[currentPhase];
    const adaptedSteps = getAdaptedSteps(phase.steps);

    if (currentStepIndex < adaptedSteps.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex(currentStepIndex + 1);
      }, 2500);
    } else {
      setCurrentView('completion');
    }
  };

  const toggleWorkout = (exerciseIndex) => {
    const key = `${weekDay}_${currentStepIndex}`;
    const current = workoutCheckboxes[key] || [];
    const newChecked = current.includes(exerciseIndex)
      ? current.filter(i => i !== exerciseIndex)
      : [...current, exerciseIndex];

    setWorkoutCheckboxes({
      ...workoutCheckboxes,
      [key]: newChecked
    });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to start over? This will clear your progress.')) {
      localStorage.removeItem('dailyFlowSession');
      window.location.reload();
    }
  };

  if (currentView === 'intro') {
    return (
      <div className="intro-screen">
        <h1 className="intro-title">Daily Flow</h1>
        <p className="intro-subtitle">Your gentle companion through every phase</p>

        <div className="input-group">
          <label className="input-label">Select Your Pathway</label>
          <select
            id="pathway"
            value={pathway}
            onChange={(e) => setPathway(e.target.value)}
            required
          >
            <option value="">Choose your situation...</option>
            <option value="young-flexible">Young Professional - Building Career (Flexible Schedule)</option>
            <option value="young-work">Young Professional - Full-Time Job (8hr Work Day)</option>
            <option value="peri-work">Perimenopause/40s - Working (8hr Work Day)</option>
            <option value="peri-retired">Perimenopause/40s - Retired/Flexible</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label">What day of your cycle are you on?</label>
          <input
            type="number"
            value={cycleDay}
            onChange={(e) => setCycleDay(e.target.value)}
            min="1"
            max="28"
            placeholder="Enter 1-28"
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label">What day is today?</label>
          <select
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            required
          >
            <option value="">Select a day...</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>

        <button className="start-button" onClick={handleStartApp}>Begin</button>
      </div>
    );
  }

  if (currentView === 'app' && currentPhase) {
    const phase = phaseData[currentPhase];
    const adaptedSteps = getAdaptedSteps(phase.steps);
    const step = adaptedSteps[currentStepIndex];
    const gymSchedule = getGymSchedule();
    const gym = gymSchedule[weekDay];

    const isMovementStep = step.title.includes('Movement') || step.title.includes('Gym') || step.title.includes('Training');
    const workoutKey = `${weekDay}_${currentStepIndex}`;
    const checkedExercises = workoutCheckboxes[workoutKey] || [];

    return (
      <div className="app-layout">
        <div className="progress-panel">
          <h2 className="panel-header">Today's Flow</h2>
          <div className="phase-badge">
            {phase.name}<br />
            <small style={{ fontSize: '14px', opacity: 0.9 }}>Days {phase.days} · {weekDay}</small>
          </div>
          <div className="task-list">
            {adaptedSteps.map((s, index) => (
              <div
                key={index}
                className={`task-item ${index === currentStepIndex ? 'active' : ''} ${completedSteps.includes(index) ? 'completed' : ''}`}
                onClick={() => setCurrentStepIndex(index)}
              >
                <span className="task-icon">{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div className="task-time">{s.time}</div>
                  <div style={{ fontSize: '14px' }}>{s.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="main-content">
          <div className="nav-buttons">
            <button
              className="nav-button"
              onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
              disabled={currentStepIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="nav-button"
              onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
              disabled={currentStepIndex === adaptedSteps.length - 1}
            >
              Next →
            </button>
            <button className="nav-button" onClick={handleReset} style={{ marginLeft: 'auto' }}>
              Reset
            </button>
          </div>

          <div className="step-header">
            <h2 className="step-title">{step.icon} {step.title}</h2>
            <div className="step-time">{step.time}</div>
          </div>

          <div className="step-content">
            <p className="task-description">{step.description}</p>
            <div className="task-list">
              <h3>Let's do this:</h3>
              <ul>
                {step.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>

            {isMovementStep && (
              <div className="task-list" style={{ marginTop: '40px' }}>
                <h3>{gym.icon} Today's Workout: {gym.name}</h3>
                <div>
                  {gym.exercises.map((exercise, idx) => (
                    <div
                      key={idx}
                      className="workout-item"
                      onClick={() => toggleWorkout(idx)}
                    >
                      <div className={`workout-checkbox ${checkedExercises.includes(idx) ? 'checked' : ''}`}></div>
                      <div className={`workout-text ${checkedExercises.includes(idx) ? 'checked' : ''}`}>
                        {exercise}
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--warm-gray)', fontWeight: 300 }}>
                  {currentPhase === 'menstrual' || currentPhase === 'luteal'
                    ? 'Remember: Modify as needed. Lighter weights and reduced sets are perfectly fine today.'
                    : 'You\'ve got the energy for this! Focus on form and progressive overload.'}
                </p>
              </div>
            )}

            <div className="action-buttons">
              <button className="action-button completed-button" onClick={handleCompleteStep}>
                Completed
              </button>
              <button className="action-button skip-button" onClick={handleSkipStep}>
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'completion') {
    const phase = phaseData[currentPhase];
    const adaptedSteps = getAdaptedSteps(phase.steps);
    const completionRate = Math.round((completedSteps.length / adaptedSteps.length) * 100);

    let message = '';
    if (completionRate === 100) {
      message = "You completed EVERYTHING today! Absolutely incredible!";
    } else if (completionRate >= 70) {
      message = "You did so much today! That's wonderful!";
    } else if (completionRate >= 40) {
      message = "You showed up and did your best! That's what matters!";
    } else {
      message = "You made it through the day! That alone is an achievement!";
    }

    return (
      <div className="completion-screen">
        <h2>Day Complete! 🌙</h2>
        <p>{message}</p>
        <p style={{ fontSize: '28px', margin: '30px 0' }}>
          You completed {completedSteps.length} out of {adaptedSteps.length} tasks
        </p>
        <div className="sticky-note success" style={{ margin: '40px auto' }}>
          <div className="sticky-message">
            Remember: Progress isn't perfection.<br />
            You're exactly where you need to be. ✨
          </div>
        </div>
        <button className="restart-button" onClick={() => window.location.reload()}>
          Start New Day
        </button>
      </div>
    );
  }

  return null;
}

export default App;
