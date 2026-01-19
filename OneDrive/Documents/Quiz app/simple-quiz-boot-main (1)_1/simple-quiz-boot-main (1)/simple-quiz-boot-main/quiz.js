// Enhanced quiz data with categories and explanations
    const questions = [
      {
        "id": 1,
        "question": "What is used to structure web pages?",
        "options": ["HTML", "CSS", "JavaScript", "PHP"],
        "answer": "HTML",
        "category": "HTML Basics",
        "explanation": "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications."
      },
      {
        "id": 2,
        "question": "Which language is primarily used for styling web pages?",
        "options": ["HTML", "CSS", "JavaScript", "ReactJS"],
        "answer": "CSS",
        "category": "CSS Fundamentals",
        "explanation": "CSS (Cascading Style Sheets) is used to describe the presentation of a document written in HTML."
      },
      {
        "id": 3,
        "question": "Which programming language is used for adding interactivity to web pages?",
        "options": ["HTML", "CSS", "JavaScript", "Python"],
        "answer": "JavaScript",
        "category": "JavaScript",
        "explanation": "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more."
      },
      {
        "id": 4,
        "question": "Which tool is used to manage the styles of a website?",
        "options": ["JavaScript", "CSS", "Node.js", "PHP"],
        "answer": "CSS",
        "category": "CSS Fundamentals",
        "explanation": "CSS is specifically designed for styling and layout of web pages, including colors, layout, and fonts."
      },
      {
        "id": 5,
        "question": "What does 'CSS' stand for?",
        "options": ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Coded Style Sheets"],
        "answer": "Cascading Style Sheets",
        "category": "CSS Fundamentals",
        "explanation": "CSS stands for Cascading Style Sheets, which refers to how styles cascade from more general to more specific."
      },
      {
        "id": 6,
        "question": "Which HTML tag is used to reference an external CSS file?",
        "options": ["&lt;style&gt;", "&lt;link&gt;", "&lt;script&gt;", "&lt;css&gt;"],
        "answer": "&lt;link&gt;",
        "category": "HTML Basics",
        "explanation": "The &lt;link&gt; tag with rel='stylesheet' attribute is used to link an external CSS file to an HTML document."
      },
      {
        "id": 7,
        "question": "Which of these is a JavaScript framework?",
        "options": ["React", "Laravel", "Django", "Ruby on Rails"],
        "answer": "React",
        "category": "JavaScript",
        "explanation": "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of developers."
      },
      {
        "id": 8,
        "question": "What does 'DOM' stand for in web development?",
        "options": ["Document Object Model", "Digital Object Manipulation", "Data Object Model", "Dynamic Online Model"],
        "answer": "Document Object Model",
        "category": "Web Concepts",
        "explanation": "The Document Object Model (DOM) is a programming interface for HTML and XML documents that represents the page structure."
      },
      {
        "id": 9,
        "question": "Which attribute in the <a> tag specifies the URL of the page the link goes to?",
        "options": ["href", "src", "alt", "title"],
        "answer": "href",
        "category": "HTML Basics",
        "explanation": "The 'href' attribute in an anchor tag specifies the destination address of the hyperlink."
      },
      {
        "id": 10,
        "question": "Which of the following is used to store data in web browsers?",
        "options": ["Cookies", "LocalStorage", "SessionStorage", "All of the above"],
        "answer": "All of the above",
        "category": "Web Storage",
        "explanation": "Web browsers provide multiple storage mechanisms: Cookies, LocalStorage, and SessionStorage for different data persistence needs."
      }
    ];

    // Quiz state variables
    let currentQuestion = 0;
    let score = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let timeLeft = 300; // 5 minutes in seconds
    let timerInterval;
    let quizCompleted = false;

    // DOM Elements
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const scoreElement = document.getElementById('score');
    const questionCounter = document.getElementById('question-counter');
    const currentQuestionNum = document.getElementById('current-question-num');
    const questionCategory = document.getElementById('question-category');
    const progressFill = document.getElementById('progress-fill');
    const timerElement = document.getElementById('timer');
    const questionNav = document.getElementById('question-nav');
    const resultsModal = document.getElementById('results-modal');
    const restartBtn = document.getElementById('restart-btn');
    const closeBtn = document.getElementById('close-btn');
    const correctAnswersElement = document.getElementById('correct-answers');
    const wrongAnswersElement = document.getElementById('wrong-answers');
    const timeTakenElement = document.getElementById('time-taken');
    const resultMessageElement = document.getElementById('result-message');
    const scoreCircle = document.getElementById('score-circle');
    const scoreText = document.getElementById('score-text');

    // Initialize the quiz
    function initQuiz() {
      displayQuestion();
      updateProgress();
      startTimer();
      createQuestionNavigation();
      updateSidebarStats();
    }

    // Display current question and options
    function displayQuestion() {
      const question = questions[currentQuestion];
      
      // Update question elements
      questionText.textContent = question.question;
      currentQuestionNum.textContent = currentQuestion + 1;
      questionCategory.textContent = question.category;
      questionCounter.textContent = `${currentQuestion + 1}/${questions.length}`;
      
      // Clear previous answers
      answersContainer.innerHTML = '';
      
      // Create answer options
      const optionLetters = ['A', 'B', 'C', 'D'];
      question.options.forEach((option, index) => {
        const answerOption = document.createElement('div');
        answerOption.className = 'answer-option';
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestion] === option) {
          answerOption.classList.add('selected');
        }
        
        answerOption.innerHTML = `
          <div class="option-marker">${optionLetters[index]}</div>
          <div class="answer-text">${option}</div>
          <div class="answer-status">
            <i class="fas fa-check"></i>
          </div>
        `;
        
        // Add click event
        answerOption.addEventListener('click', () => selectAnswer(option, answerOption));
        answersContainer.appendChild(answerOption);
      });
      
      // Update button states
      prevBtn.disabled = currentQuestion === 0;
      nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : 'flex';
      submitBtn.style.display = currentQuestion === questions.length - 1 ? 'flex' : 'none';
      
      // Update navigation highlights
      updateNavigationHighlight();
    }

    // Select an answer
    function selectAnswer(selectedOption, selectedElement) {
      // Remove selected class from all options
      document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
      });
      
      // Add selected class to clicked option
      selectedElement.classList.add('selected');
      
      // Store user's answer
      userAnswers[currentQuestion] = selectedOption;
      
      // Update navigation to show answered question
      updateNavigationHighlight();
      
      // Automatically move to next question after a delay (optional)
      // setTimeout(() => {
      //   if (currentQuestion < questions.length - 1) {
      //     currentQuestion++;
      //     displayQuestion();
      //     updateProgress();
      //   }
      // }, 500);
    }

    // Create question navigation
    function createQuestionNavigation() {
      questionNav.innerHTML = '';
      
      questions.forEach((_, index) => {
        const navItem = document.createElement('div');
        navItem.className = 'nav-item';
        navItem.textContent = index + 1;
        navItem.addEventListener('click', () => {
          if (!quizCompleted) {
            currentQuestion = index;
            displayQuestion();
            updateProgress();
          }
        });
        questionNav.appendChild(navItem);
      });
    }

    // Update navigation highlight
    function updateNavigationHighlight() {
      document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.classList.remove('current', 'answered');
        
        if (index === currentQuestion) {
          item.classList.add('current');
        }
        
        if (userAnswers[index] !== null) {
          item.classList.add('answered');
        }
      });
    }

    // Update progress bar and stats
    function updateProgress() {
      const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
      progressFill.style.width = `${progressPercentage}%`;
      
      // Calculate current score
      let tempScore = 0;
      userAnswers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
          tempScore++;
        }
      });
      
      score = tempScore;
      scoreElement.textContent = score;
    }

    // Timer functionality
    function startTimer() {
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          submitQuiz();
        }
        
        // Change timer color when less than 1 minute
        if (timeLeft <= 60) {
          timerElement.style.color = 'var(--danger-color)';
          timerElement.classList.add('pulse');
        }
      }, 1000);
    }

    function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Calculate time taken
    function getTimeTaken() {
      const totalSeconds = 300 - timeLeft;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Navigate to next question
    nextBtn.addEventListener('click', () => {
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
      }
    });

    // Navigate to previous question
    prevBtn.addEventListener('click', () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
      }
    });

    // Submit quiz
    submitBtn.addEventListener('click', submitQuiz);

    function submitQuiz() {
      clearInterval(timerInterval);
      quizCompleted = true;
      
      // Calculate final score
      score = 0;
      questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
          score++;
        }
      });
      
      // Show results modal
      showResults();
    }

    // Show results modal
    function showResults() {
      const wrongAnswers = questions.length - score;
      const percentage = (score / questions.length) * 100;
      
      // Set score circle
      scoreCircle.style.setProperty('--score-percentage', percentage);
      scoreText.textContent = `${score}/${questions.length}`;
      
      // Update result stats
      correctAnswersElement.textContent = score;
      wrongAnswersElement.textContent = wrongAnswers;
      timeTakenElement.textContent = getTimeTaken();
      
      // Set result message
      let message = '';
      if (percentage >= 90) {
        message = 'Outstanding! You have exceptional web development knowledge.';
      } else if (percentage >= 70) {
        message = 'Great job! You have a solid understanding of web development concepts.';
      } else if (percentage >= 50) {
        message = 'Good effort! You know the basics but could use more practice.';
      } else {
        message = 'Keep learning! Review the concepts and try again.';
      }
      resultMessageElement.textContent = message;
      
      // Show modal
      resultsModal.style.display = 'flex';
    }

    // Restart quiz
    restartBtn.addEventListener('click', () => {
      // Reset quiz state
      currentQuestion = 0;
      score = 0;
      userAnswers = new Array(questions.length).fill(null);
      timeLeft = 300;
      quizCompleted = false;
      
      // Reset UI
      resultsModal.style.display = 'none';
      timerElement.style.color = 'var(--primary-color)';
      timerElement.classList.remove('pulse');
      
      // Reinitialize quiz
      initQuiz();
    });

    // Close results modal
    closeBtn.addEventListener('click', () => {
      resultsModal.style.display = 'none';
    });

    // Update sidebar stats
    function updateSidebarStats() {
      // This function can be expanded to show additional stats
    }

    // Initialize quiz when page loads
    window.addEventListener('DOMContentLoaded', initQuiz);
