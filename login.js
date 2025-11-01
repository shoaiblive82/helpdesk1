document.addEventListener('DOMContentLoaded', function() {
    // Default users for demo purposes
    const defaultUsers = [
        { username: 'admin', password: '1234', role: 'admin' },
        { username: 'user', password: '123', role: 'user' }
    ];

    // Force update the users in localStorage with the current passwords
    localStorage.setItem('users', JSON.stringify(defaultUsers));

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Find user
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Store login status and user info
                const userData = {
                    username: user.username,
                    role: user.role,
                    isLoggedIn: true
                };
                
                // Store in sessionStorage (cleared when browser is closed)
                sessionStorage.setItem('currentUser', JSON.stringify(userData));
                
                // If remember me is checked, also store in localStorage
                if (rememberMe) {
                    localStorage.setItem('rememberedUser', JSON.stringify(userData));
                } else {
                    localStorage.removeItem('rememberedUser');
                }
                
                // Redirect to main page
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    }

    // Handle register link click (for future implementation)
    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Registration functionality will be implemented in a future update.');
        });
    }

    // Check if user is already logged in (from previous session)
    function checkLoginStatus() {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
        
        // If on login page but already logged in, redirect to main page
        if ((currentUser && currentUser.isLoggedIn) || (rememberedUser && rememberedUser.isLoggedIn)) {
            if (window.location.pathname.includes('login.html')) {
                window.location.href = 'index.html';
            }
        } else {
            // If not on login page and not logged in, redirect to login page
            if (!window.location.pathname.includes('login.html')) {
                window.location.href = 'login.html';
            }
        }
    }

    // Run login check
    checkLoginStatus();
});