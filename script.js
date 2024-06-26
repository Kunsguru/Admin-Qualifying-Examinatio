const correctAnswers = ['a', 'b', 'c', 'd', 'c', 'a', 'c', 'b','c', 'a', 'a', 'a','b', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'b', 'c', 'b', 'a', 'a', 'c', 'b', 'b', 'c', 'c', 'c', 'a', 'b', 'b', 'b', 'd', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'a', 'c', 'c', 'a', 'a', 'c', 'c',/* add the rest of the correct answers here */];
        const examPasscode = 'exam2024'; // Define the passcode here

        function startExam() {
            let duration = 2 * 60 * 60 * 1000; // 2 hours in milliseconds
            setTimeout(submitExam, duration);
        }

        function submitExam() {
            document.getElementById('examForm').submit();
        }

        function calculateScore(answers) {
            let score = 0;
            for (let i = 0; i < correctAnswers.length; i++) {
                if (answers[i] === correctAnswers[i]) {
                    score++;
                }
            }
            return score;
        }

        function handleSubmit(event) {
            event.preventDefault();
            const form = document.getElementById('examForm');
            const formData = new FormData(form);
            const answers = [];
            for (let i = 1; i <= 50; i++) {
                answers.push(formData.get('q' + i));
            }
            const score = calculateScore(answers);
            const name = formData.get('name');
            const email = formData.get('email');
            const matricNumber = formData.get('matric_number');
            const phone = formData.get('phone');
            const adminEmail = 'mondaykingsley80@gmail.com';
            const subject = 'New Exam Submission';
            const body = `Student ${name} with matric number ${matricNumber} and ${email} has submitted the exam.\nScore: ${score}/50`;

            // Send email to admin
            window.location.href = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Show confirmation to student
            alert('Shullian Stitches & Couture has submitted. Candidate will receive results shortly.');
        }

        function unlockExam() {
            const enteredPasscode = document.getElementById('passcode').value;
            if (enteredPasscode === examPasscode) {
                document.getElementById('examSection').classList.remove('hidden');
                document.getElementById('passcodeSection').classList.add('hidden');
                startExam();
            } else {
                alert('Incorrect passcode. Please try again.');
            }
        }
