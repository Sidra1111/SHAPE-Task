A web-based application built using ASP.NET Core MVC with SQL Server.

Project Setup
Clone the Repository:

sh
Copy
Edit
git clone https://github.com/Sidra1111/SHAPE-Task.git
cd SHAPE-Task
Install Dependencies:

.NET 8 SDK

SQL Server & SSMS

Visual Studio 2022

Git

Restore Dependencies:

sh
Copy
Edit
dotnet restore
Database Setup:

Open SQL Server Management Studio (SSMS) and create a database named SHAPE_DB.

Restore Database/SHAPE.bak in SSMS (Restore Database... → Select the .bak file).

Or update appsettings.json with your connection string and run:

sh
Copy
Edit
dotnet ef database update
Run the Project:

sh
Copy
Edit
dotnet run
Open https://localhost:5001 in the browser.
