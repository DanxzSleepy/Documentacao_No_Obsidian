// script.js - Professional Scrum Presentation Script

// Current slide index (0-based)
let currentSlideIndex = 0;
// Current step within the slide (for animations)
let currentStepIndex = 0;
// Total steps for progress calculation
let totalSteps = 0;

// DOM Elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.querySelector('.progress-fill');
const clickIndicator = document.querySelector('.click-indicator');

// Slide configurations for step-by-step animations
const slideConfigurations = [
    { steps: 1 }, // Slide 1: Introduction
    { steps: 4 }, // Slide 2: Complexity and When to Use Scrum
    { steps: 3 }, // Slide 3: The 3 Pillars of Scrum
    { steps: 3 }, // Slide 4: Scrum Roles
    { steps: 3 }, // Slide 5: Scrum Practices
    { steps: 8 }, // Slide 6: Scrum Flow
    { steps: 3 }, // Slide 7: Daily Scrum
    { steps: 2 }, // Slide 8: Sprint Closing Activities
    { steps: 2 }, // Slide 9: Useful Tools
    { steps: 1 }  // Slide 10: Summary
];

// Calculate total steps for progress bar
function calculateTotalSteps() {
    totalSteps = slideConfigurations.reduce((sum, config) => sum + config.steps, 0);
    return totalSteps;
}

// Initialize the presentation
document.addEventListener('DOMContentLoaded', () => {
    calculateTotalSteps();
    showSlide(currentSlideIndex);
    updateProgress();
    
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextStepOrSlide);
    
    // Click anywhere on slide to advance
    document.querySelector('.presentation-container').addEventListener('click', (e) => {
        // Don't trigger if clicking on navigation buttons
        if (e.target !== prevBtn && e.target !== nextBtn && 
            !prevBtn.contains(e.target) && !nextBtn.contains(e.target)) {
            goToNextStepOrSlide();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (e.key === 'ArrowRight' || e.key === ' ') {
            goToNextStepOrSlide();
        }
    });
    
    // Hide click indicator after first interaction
    setTimeout(() => {
        if (clickIndicator) {
            clickIndicator.style.opacity = '0';
            setTimeout(() => {
                clickIndicator.style.display = 'none';
            }, 1000);
        }
    }, 5000);
});

// Show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the current slide
    if (index >= 0 && index < slides.length) {
        slides[index].classList.add('active');
        currentSlideIndex = index;
        currentStepIndex = 0; // Reset step index when changing slides
        
        // Apply slide-specific initialization
        initializeSlide(index);
    }
    
    // Update button visibility
    updateButtonVisibility();
    updateProgress();
}

// Initialize slide-specific elements
function initializeSlide(index) {
    // Reset all elements that should be revealed step by step
    const currentSlide = slides[index];
    
    // For slide 2 (quadrants), hide all quadrants initially except the first
    if (index === 1) {
        const quadrants = currentSlide.querySelectorAll('.quadrant');
        quadrants.forEach((quad, i) => {
            if (i > 0) {
                quad.classList.remove('quadrant-visible');
            } else {
                quad.classList.add('quadrant-visible');
            }
        });
    }
    
    // For slide 3 (pillars), hide all pillars initially except the first
    if (index === 2) {
        const pillars = currentSlide.querySelectorAll('.pillar-card');
        pillars.forEach((pillar, i) => {
            if (i > 0) {
                pillar.classList.remove('pillar-visible');
            } else {
                pillar.classList.add('pillar-visible');
            }
        });
    }
    
    // For slide 4 (roles), hide all roles initially except the first
    if (index === 3) {
        const roles = currentSlide.querySelectorAll('.role-card');
        roles.forEach((role, i) => {
            if (i > 0) {
                role.classList.remove('role-visible');
            } else {
                role.classList.add('role-visible');
            }
        });
    }
    
    // For slide 5 (practices), hide all practice sections initially except the first
    if (index === 4) {
        const practices = currentSlide.querySelectorAll('.practice-section');
        practices.forEach((practice, i) => {
            if (i > 0) {
                practice.classList.remove('practice-visible');
            } else {
                practice.classList.add('practice-visible');
            }
        });
    }
    
    // For slide 6 (flow), hide all flow steps and arrows initially except the first step and arrow
    if (index === 5) {
        const flowSteps = currentSlide.querySelectorAll('.flow-step');
        const flowArrows = currentSlide.querySelectorAll('.flow-arrow');
        
        flowSteps.forEach((step, i) => {
            if (i > 0) {
                step.classList.remove('flow-visible');
            } else {
                step.classList.add('flow-visible');
            }
        });
        
        flowArrows.forEach((arrow, i) => {
            // Only show the first arrow if there's a second step to connect to
            if (i === 0) {
                arrow.classList.add('arrow-visible');
            } else {
                arrow.classList.remove('arrow-visible');
            }
        });
    }
    
    // For slide 7 (daily questions), hide all questions initially except the first
    if (index === 6) {
        const questions = currentSlide.querySelectorAll('.daily-question');
        questions.forEach((question, i) => {
            if (i > 0) {
                question.classList.remove('question-visible');
            } else {
                question.classList.add('question-visible');
            }
        });
    }
    
    // For slide 8 (closing activities), hide second activity initially
    if (index === 7) {
        const activities = currentSlide.querySelectorAll('.activity-card');
        activities.forEach((activity, i) => {
            if (i > 0) {
                activity.classList.remove('activity-visible');
            } else {
                activity.classList.add('activity-visible');
            }
        });
    }
    
    // For slide 9 (tools), hide second tool initially
    if (index === 8) {
        const tools = currentSlide.querySelectorAll('.tool-card');
        tools.forEach((tool, i) => {
            if (i > 0) {
                tool.classList.remove('tool-visible');
            } else {
                tool.classList.add('tool-visible');
            }
        });
    }
    
    // For slide 10 (summary), hide flow items initially except the first
    if (index === 9) {
        const flowItems = currentSlide.querySelectorAll('.flow-item');
        flowItems.forEach((item, i) => {
            if (i > 0) {
                item.classList.remove('flow-item-visible');
            } else {
                item.classList.add('flow-item-visible');
            }
        });
    }
}

// Go to the next step or slide
function goToNextStepOrSlide() {
    const currentConfig = slideConfigurations[currentSlideIndex];
    
    // If there are more steps in the current slide, go to next step
    if (currentStepIndex < currentConfig.steps - 1) {
        currentStepIndex++;
        revealNextStep();
    } 
    // Otherwise, go to next slide
    else if (currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    }
    // If we're at the last slide and last step, restart
    else {
        showSlide(0);
    }
}

// Go to the previous slide
function goToPrevSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    }
}

// Reveal the next step in the current slide with animation
function revealNextStep() {
    const currentSlide = slides[currentSlideIndex];
    
    switch (currentSlideIndex) {
        case 1: // Slide 2: Complexity and When to Use Scrum
            if (currentStepIndex >= 1 && currentStepIndex <= 3) {
                const quadrant = currentSlide.querySelector(`#quad${currentStepIndex + 1}`);
                if (quadrant) {
                    quadrant.classList.add('quadrant-visible');
                    // Add animation effect
                    setTimeout(() => {
                        quadrant.style.transition = 'all 0.5s ease';
                        quadrant.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            quadrant.style.transform = 'scale(1)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 2: // Slide 3: The 3 Pillars of Scrum
            if (currentStepIndex >= 1 && currentStepIndex <= 2) {
                const pillar = currentSlide.querySelectorAll('.pillar-card')[currentStepIndex];
                if (pillar) {
                    pillar.classList.add('pillar-visible');
                    // Add animation effect
                    setTimeout(() => {
                        pillar.style.transition = 'all 0.5s ease';
                        pillar.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            pillar.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 3: // Slide 4: Scrum Roles
            if (currentStepIndex >= 1 && currentStepIndex <= 2) {
                const role = currentSlide.querySelectorAll('.role-card')[currentStepIndex];
                if (role) {
                    role.classList.add('role-visible');
                    // Add animation effect
                    setTimeout(() => {
                        role.style.transition = 'all 0.5s ease';
                        role.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            role.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 4: // Slide 5: Scrum Practices
            if (currentStepIndex >= 1 && currentStepIndex <= 2) {
                const practice = currentSlide.querySelectorAll('.practice-section')[currentStepIndex];
                if (practice) {
                    practice.classList.add('practice-visible');
                    // Add animation effect
                    setTimeout(() => {
                        practice.style.transition = 'all 0.5s ease';
                        practice.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            practice.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 5: // Slide 6: Scrum Flow
            if (currentStepIndex % 2 === 0) {
                // Reveal a flow step
                const stepIndex = Math.floor(currentStepIndex / 2) + 1;
                if (stepIndex < 8) {
                    const flowStep = currentSlide.querySelector(`#step${stepIndex + 1}`);
                    if (flowStep) {
                        flowStep.classList.add('flow-visible');
                        // Add animation effect
                        setTimeout(() => {
                            flowStep.style.transition = 'all 0.5s ease';
                            flowStep.style.transform = 'scale(1.05)';
                            setTimeout(() => {
                                flowStep.style.transform = 'scale(1)';
                            }, 300);
                        }, 10);
                    }
                }
            } else {
                // Reveal an arrow
                const arrowIndex = Math.floor(currentStepIndex / 2) + 1;
                const flowArrows = currentSlide.querySelectorAll('.flow-arrow');
                if (arrowIndex < flowArrows.length) {
                    const flowArrow = flowArrows[arrowIndex];
                    if (flowArrow) {
                        flowArrow.classList.add('arrow-visible');
                        // Add animation effect
                        setTimeout(() => {
                            flowArrow.style.transition = 'all 0.5s ease';
                            flowArrow.style.transform = 'scale(1.2)';
                            setTimeout(() => {
                                flowArrow.style.transform = 'scale(1)';
                            }, 300);
                        }, 10);
                    }
                }
            }
            break;
            
        case 6: // Slide 7: Daily Scrum
            if (currentStepIndex >= 1 && currentStepIndex <= 2) {
                const question = currentSlide.querySelectorAll('.daily-question')[currentStepIndex];
                if (question) {
                    question.classList.add('question-visible');
                    // Add animation effect
                    setTimeout(() => {
                        question.style.transition = 'all 0.5s ease';
                        question.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            question.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 7: // Slide 8: Sprint Closing Activities
            if (currentStepIndex === 1) {
                const activity = currentSlide.querySelectorAll('.activity-card')[1];
                if (activity) {
                    activity.classList.add('activity-visible');
                    // Add animation effect
                    setTimeout(() => {
                        activity.style.transition = 'all 0.5s ease';
                        activity.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            activity.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 8: // Slide 9: Useful Tools
            if (currentStepIndex === 1) {
                const tool = currentSlide.querySelectorAll('.tool-card')[1];
                if (tool) {
                    tool.classList.add('tool-visible');
                    // Add animation effect
                    setTimeout(() => {
                        tool.style.transition = 'all 0.5s ease';
                        tool.style.transform = 'translateY(-10px)';
                        setTimeout(() => {
                            tool.style.transform = 'translateY(0)';
                        }, 300);
                    }, 10);
                }
            }
            break;
            
        case 9: // Slide 10: Summary
            // Reveal next flow item
            const flowItems = currentSlide.querySelectorAll('.flow-item');
            if (currentStepIndex < flowItems.length) {
                flowItems[currentStepIndex].classList.add('flow-item-visible');
                // Add animation effect
                setTimeout(() => {
                    flowItems[currentStepIndex].style.transition = 'all 0.5s ease';
                    flowItems[currentStepIndex].style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        flowItems[currentStepIndex].style.transform = 'scale(1)';
                    }, 300);
                }, 10);
            }
            break;
    }
    
    updateProgress();
}

// Update navigation button visibility
function updateButtonVisibility() {
    prevBtn.style.display = currentSlideIndex > 0 ? 'flex' : 'none';
    nextBtn.textContent = currentSlideIndex < slides.length - 1 ? 'Próximo ' : 'Reiniciar ';
    
    // Update icon in next button
    if (currentSlideIndex < slides.length - 1) {
        nextBtn.innerHTML = 'Próximo <i class="fas fa-chevron-right"></i>';
    } else {
        nextBtn.innerHTML = 'Reiniciar <i class="fas fa-redo"></i>';
    }
}

// Update progress bar
function updateProgress() {
    let completedSteps = 0;
    
    // Count completed steps in previous slides
    for (let i = 0; i < currentSlideIndex; i++) {
        completedSteps += slideConfigurations[i].steps;
    }
    
    // Add current step in current slide
    completedSteps += currentStepIndex + 1;
    
    const progressPercentage = (completedSteps / totalSteps) * 100;
    progressFill.style.width = `${progressPercentage}%`;
}

// Touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next
        goToNextStepOrSlide();
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous
        goToPrevSlide();
    }
}