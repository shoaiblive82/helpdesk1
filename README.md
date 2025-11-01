# Helpdesk & Ticketing System

A modern, responsive web-based helpdesk and ticketing system built with HTML, CSS, and JavaScript. Features a beautiful RGB-themed UI with smooth animations, role-based access control, and real-time SLA tracking.

## 🎨 Features

### Core Functionality
- ✅ **Create & Manage Tickets** - Create tickets with title, description, category, priority, and SLA hours
- ✅ **Role-Based Access Control** - Admin and User roles with different permissions
- ✅ **Real-Time SLA Timer** - Live countdown timer that tracks time remaining for each ticket
- ✅ **Auto-Escalation** - Tickets automatically escalate to "Escalated" when SLA is breached
- ✅ **Advanced Filtering** - Filter tickets by category, status, priority, and search by text
- ✅ **Sorting Options** - Sort by creation date, SLA, or priority
- ✅ **Bulk Actions** - Admins can select multiple tickets and change their status at once
- ✅ **Ticket History** - View complete history of all ticket actions and changes
- ✅ **Local Storage** - All data persists in browser's localStorage

### Admin Features
- ✏️ **Edit Tickets** - Inline editing of ticket title and description
- 👤 **Assign Tickets** - Assign tickets to team members
- 🔄 **Change Status** - Update ticket status (Open, In Progress, Resolved, Closed, Escalated)
- 🗑️ **Delete Tickets** - Remove tickets from the system
- ☑️ **Bulk Selection** - Select and manage multiple tickets simultaneously

### User Features
- 👁️ **View Tickets** - View all tickets and their details
- ➕ **Create Tickets** - Submit new support requests
- 🔍 **Search & Filter** - Find tickets using search and filter options
- 📊 **Track SLA** - Monitor SLA countdown for tickets

### Modern UI/UX
- 🌈 **RGB Theme** - Beautiful RGB gradient colors (Indigo, Pink, Cyan)
- ✨ **Smooth Animations** - Character reveal animations, shimmer effects, and transitions
- 🎭 **Glassmorphism Design** - Modern frosted glass effects throughout
- 📱 **Responsive Layout** - Works perfectly on desktop and mobile devices
- 🎯 **Interactive Elements** - Hover effects, pulse animations, and visual feedback

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required - runs entirely in the browser!

### Installation

1. **Clone or Download** the repository:
   ```bash
   git clone <repository-url>
   cd helpdesk1
   ```

2. **Open the Project**:
   - Simply open `index.html` in your web browser, OR
   - Use a local development server for better experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Access the Application**:
   - Navigate to `http://localhost:8000`
   - Or open `index.html` directly

### Login Credentials

#### Admin Account
- **Username:** `admin`
- **Password:** `1234`
- **Features:** Full access to all ticket management features

#### User Account
- **Username:** `user`
- **Password:** `123`
- **Features:** Create and view tickets only

## 📁 Project Structure

```
helpdesk1/
├── index.html          # Main application page
├── login.html          # Login page
├── style.css           # All styling and animations
├── script.js           # Main application logic
├── login.js            # Login authentication logic
└── README.md           # This file
```

## 🎯 How to Use

### Creating a Ticket

1. **Login** to your account
2. Fill in the ticket details:
   - **Title**: Brief summary of the issue
   - **Description**: Detailed description of the problem
   - **Category**: academic, Hostel, Maintenance, or Other
   - **Priority**: Low, Medium, High, or Critical
   - **SLA Hours**: Number of hours to resolve (default: 24)
3. Click **"Create Ticket"**

### Managing Tickets (Admin Only)

1. **Edit Ticket**: Click the "Edit" button, modify content, then "Save"
2. **Assign Ticket**: Click "Assign" and enter the assignee's name
3. **Change Status**: Use the dropdown to update ticket status
4. **Delete Ticket**: Click "Delete" to remove a ticket
5. **Bulk Actions**: Select multiple tickets with checkboxes, choose status, then "Apply"

### Viewing Ticket History

1. Click **"View History"** on any ticket
2. See complete chronological record of all actions
3. Click again to hide history

## 🎨 Design Features

### RGB Theme
- **Indigo** (`rgb(99, 102, 241)`) - Primary actions, borders
- **Pink** (`rgb(236, 72, 153)`) - Accents, gradients
- **Cyan** (`rgb(34, 211, 238)`) - Highlights, animations

### Animations
- **Character Reveal**: Title letters animate in sequentially with 3D flip
- **Shimmer Effects**: RGB gradient waves across text and borders
- **Pulse Animations**: Continuous breathing effects on key elements
- **Hover Effects**: Interactive feedback on all clickable elements

### Glassmorphism
- Frosted glass backgrounds with backdrop blur
- Semi-transparent overlays
- Layered depth effects

## 📊 Ticket Categories

- **academic** - Academic and educational issues
- **Hostel** - Hostel and accommodation problems
- **Maintenance** - Technical and facility maintenance
- **Other** - Miscellaneous issues

## 🏷️ Priority Levels

- **Low** - Green badge, minimal urgency
- **Medium** - Yellow badge, moderate urgency
- **High** - Orange badge, high urgency
- **Critical** - Red badge, immediate attention required

## ⏱️ SLA System

- **Real-Time Tracking**: Live countdown updates every second
- **Overdue Indication**: Tickets show "OVERDUE" badge when SLA is breached
- **Auto-Escalation**: Open tickets automatically escalate when overdue
- **Customizable Hours**: Set SLA hours per ticket (default: 24 hours)

## 🔒 Security & Privacy

- **Local Storage**: All data stored locally in your browser
- **No Backend**: Zero server-side data transmission
- **Role-Based Access**: Secure permission system
- **Session Management**: Login persistence with "Remember Me" option

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Application logic
- **LocalStorage API** - Data persistence
- **SessionStorage API** - Session management

## 📝 Notes

- All data is stored locally in your browser
- Data persists even after closing the browser (localStorage)
- Export/Import functionality has been removed from the UI
- "Remember Me" option saves your login credentials

## 🎓 Learning Features

This project demonstrates:
- Modern CSS animations and transitions
- Glassmorphism UI design
- RGB gradient effects
- Role-based access control
- Real-time JavaScript updates
- Responsive web design
- Local browser storage
- Form validation and handling
- Dynamic DOM manipulation

## 🤝 Contributing

Feel free to fork this project and create your own version!

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Developer

Built as a mini project for Web Development 2025.

## 🎉 Enjoy!

Thank you for using the Helpdesk & Ticketing System! Enjoy the modern UI and smooth animations! ✨

---

**Made with ❤️ and RGB colors! 🌈**

