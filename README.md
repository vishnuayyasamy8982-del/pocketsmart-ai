# PocketSmart AI

Build a polished, production-quality personal finance web app inspired by my reference video.

The app concept is called **PocketSmart AI**.

Use the reference only for the overall product idea, navigation flow, and feature structure. Do not make a cheap pixel-for-pixel clone. Upgrade the visual design significantly and make the final result feel like a premium modern fintech startup MVP.

## 1. Authentication

Create a beautiful authentication experience with:

- Sign In
- Sign Up
- Animated segmented tab switch

Sign Up fields:
- Name
- Email
- Password

Sign In fields:
- Email
- Password

Include:
- Password visibility toggle
- Form validation
- Loading states
- Error states
- Success toast
- Smooth transition into the dashboard

Use a premium dark fintech style rather than a generic login template.

---

## 2. Main App Layout

Desktop layout:

- Fixed left sidebar
- PocketSmart AI logo
- Main content area
- Clean top section where needed

Navigation:

- Dashboard
- PocketBrain
- Transactions
- Analytics
- My Pocket
- Sign Out

Use Lucide icons.

Active navigation state should be visually clear and elegant.

For tablet and mobile:
- Collapse the sidebar
- Use a modern mobile header
- Use bottom navigation for the main sections

The entire application must be fully responsive.

---

# 3. Dashboard

Create a premium financial dashboard.

Include:

### Greeting

Example:

Good morning, Yash

Include a small intelligent financial summary under the greeting.

### Main balance card

Show:

Available Balance  
₹28,500

Include a small trend indicator.

### Monthly Budget

Example:

Monthly Budget  
₹18,400 / ₹30,000

Include a progress bar.

### Income / Expense summary

Show:

Monthly Income  
Monthly Expenses  
Net Savings

### Quick Actions

Create attractive action buttons for:

- Money Moment
- Add Expense
- Add Income
- Savings Goal
- Ask PocketBrain

Buttons must actually work.

Use modals or drawers for expense/income entry.

### Recent Transactions

Display recent transactions with:

- Category icon
- Merchant/title
- Date
- Payment method
- Amount
- Income or expense indicator

### Spending Overview

Add a clean chart showing monthly spending.

### Savings Goal

Example:

New Laptop

₹32,000 / ₹70,000

Include progress percentage.

### Smart Insight

Add an AI-style card.

Example:

"You've spent 18% less on food compared with last month. At this pace, you could save ₹3,400 more this month."

---

# 4. PocketBrain

Create a full AI financial assistant experience.

It should feel similar to ChatGPT but specifically for personal finance.

Initial PocketBrain message should analyse the current mock financial data.

Example:

"You're doing well this month. Your expenses are currently 61% of your income, and your largest spending category is food."

Add suggested prompts:

- How am I doing this month?
- What should I cut back on?
- Can I afford a new phone?
- How much can I save this month?
- Where am I spending the most?

Create a sticky chat composer at the bottom.

Include:

- Typing animation
- User message bubbles
- PocketBrain responses
- Small financial metric cards inside replies
- Smooth message animations

For now, generate responses from the local mock financial dataset.

Structure the code so a real AI API can easily be added later.

---

# 5. Transactions

IMPORTANT:

Do not leave this page empty.

Create a complete professional transaction management screen.

Top summary cards:

- Total Income
- Total Expenses
- Net Cash Flow

Add:

- Search field
- Add Transaction button

Filters:

- All
- Income
- Expenses
- Category
- Date range

Sorting:

- Newest
- Oldest
- Highest amount
- Lowest amount

Transaction list/table should contain:

- Category icon
- Transaction name
- Category
- Date
- Payment method
- Amount
- Transaction type

Actions:

- Edit
- Delete

Add Expense modal.

Fields:

- Amount
- Category
- Description
- Date
- Payment method

Add Income modal.

Fields:

- Amount
- Source
- Description
- Date
- Payment method

Make adding, editing, and deleting transactions fully functional.

---

# 6. Analytics

Create a premium analytics dashboard.

KPI cards:

- Total Income
- Total Expenses
- Savings Rate
- Net Cash Flow

Charts:

### Income vs Expenses

Show 6 months of data.

Use a smooth responsive area or line chart.

### Spending by Category

Use a donut chart.

Categories:

- Food
- Transport
- Shopping
- Utilities
- Entertainment
- Education
- Other

### Savings Trend

Show savings progress across several months.

### Top Spending Categories

Show ranked category cards with progress bars.

### Financial Insight

Add an AI-generated style summary.

Example:

"Transport expenses increased 11% this month while food spending decreased 8%."

Use Recharts.

Charts must remain readable on mobile.

---

# 7. My Pocket

This is the application's customization centre.

Desktop layout:

LEFT SIDE:
Customization controls

RIGHT SIDE:
Sticky Live Preview panel

The live preview must update instantly whenever the user changes a setting.

---

## Themes

Create premium theme presets:

### Midnight AI

Dark graphite / navy  
Electric blue accent

### Aurora

Dark purple  
Violet / cyan accent

### Ocean

Deep navy  
Aqua accent

### Forest

Dark green  
Emerald accent

### Warm Minimal

Premium warm off-white / charcoal interface

Do not use excessive gradients.

---

## Appearance Settings

Allow users to customize:

Accent Color

Font

Options:

- Inter
- Geist
- Manrope

Appearance Mode:

- Dark
- Light
- System

Card Style:

- Solid
- Glass
- Soft

Button Style:

- Rounded
- Pill
- Compact

Border Radius

Density:

- Comfortable
- Compact

---

# 8. Regional Settings

Currency selector.

Default:

INR ₹

Also include:

USD  
EUR  
GBP

Date format options:

DD/MM/YYYY

MM/DD/YYYY

YYYY-MM-DD

---

# 9. Notification Preferences

Create modern toggle controls.

Notifications:

- Budget Alerts
- Upcoming Payment Alerts
- Savings Reminders
- Goal Milestones
- AI Recommendations
- Spending Alerts

Notification frequency:

- Instant
- Daily
- Weekly

---

# 10. Live Preview

The My Pocket page must include a live dashboard preview.

When theme, accent color, card style, font, radius, or button style changes, the preview should update immediately.

Persist all customization settings using localStorage.

---

# DESIGN SYSTEM

Make the product feel like:

A premium fintech SaaS application built by a professional startup.

Default theme:

Background:
Very dark navy / graphite

Primary accent:
Electric blue

Cards:
Slightly lighter graphite

Borders:
Subtle 1px borders

Typography:
Inter or Geist

Use:

- Strong visual hierarchy
- Clean whitespace
- 8px spacing system
- 14px–18px card radius
- Subtle shadows
- Very restrained glassmorphism
- Crisp iconography
- Elegant hover effects

Avoid:

- Generic AI gradients
- Giant glowing blobs
- Excessive glassmorphism
- Huge empty areas
- Random animations
- Neon overload
- Cartoon illustrations
- AI-generated-looking artwork

The product should feel professional, premium, and trustworthy.

---

# MICRO INTERACTIONS

Use Framer Motion.

Add subtle:

- Page transitions
- Button press animation
- Card hover elevation
- Modal transitions
- Sidebar selection animation
- Chart entrance animation
- PocketBrain typing indicator

Animations should be fast and professional.

Do not make the interface feel gimmicky.

---

# RESPONSIVENESS

The application must look excellent at:

Desktop:
1440px

Laptop:
1280px

Tablet

Mobile:
390px

Desktop:

Left sidebar

Tablet:

Collapsed sidebar

Mobile:

Bottom navigation

Dashboard cards should intelligently reflow.

Charts must resize correctly.

Transaction tables should convert to mobile transaction cards.

My Pocket settings should stack vertically on mobile.

---

# MOCK FINANCE DATA

Create realistic Indian personal finance data.

Balance:

₹28,500

Monthly income:

Approximately ₹45,000

Monthly budget:

₹30,000

Include 15–20 realistic transactions.

Examples:

Salary  
Freelance Project  
Swiggy  
Zomato  
Uber  
Petrol  
Amazon  
Electricity Bill  
Netflix  
Gym  
Coffee  
Clothing  
Mobile Recharge  
College Expense

Include six months of financial data.

Create a savings goal:

MacBook / Laptop Fund

Target:

₹70,000

Saved:

₹32,000

---

# TECHNOLOGY

Use:

React

TypeScript

Tailwind CSS

shadcn/ui

Lucide React

Recharts

Framer Motion

For this MVP use:

localStorage

for:

- authentication demo
- transactions
- customization
- user preferences

Do not require external API keys for the first version.

---

# COMPONENT STRUCTURE

Use reusable components.

Suggested structure:

components/

Sidebar

MobileNavigation

DashboardCard

BalanceCard

BudgetProgress

QuickActions

TransactionList

TransactionModal

PocketBrainChat

AnalyticsCharts

ThemeSelector

CustomizationPanel

LivePreview

NotificationSettings

Do not create one massive component.

---

# IMPORTANT QUALITY REQUIREMENTS

Every navigation item must work.

Every button must work.

No blank pages.

No lorem ipsum.

No broken routes.

Transactions must support:

Add  
Edit  
Delete

Theme customization must work.

Live preview must work.

Responsive layout must work.

Authentication flow must work.

PocketBrain demo chat must work.

The final product should look significantly more premium than the reference video.

The goal is to create a fintech application that looks strong enough to:

- present to judges
- show to clients
- use as a startup MVP
- include in a portfolio

Prioritize exceptional UI/UX quality over unnecessary complexity.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3709ea21-231e-4b02-b344-4b451bed1891).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
