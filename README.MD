# Traffic Density Changer – User Manual

## Overview
This program allows you to change the traffic density and pedestrian density in the configuration files of **Euro Truck Simulator 2 (ETS 2)** and **American Truck Simulator (ATS)**. It displays the current densities, allows you to modify them, and offers an option to reset the densities to default values.

## Prerequisites
- **Euro Truck Simulator 2** and/or **American Truck Simulator** must be installed on your PC.
- The program requires access to the configuration files of the games:
  - **ETS 2**: `Documents\Euro Truck Simulator 2\config.cfg`
  - **ATS**: `Documents\American Truck Simulator\config.cfg`
- The program will automatically create backup copies of the configuration files if they don’t already exist.

## Usage Instructions

### 1. **Launching the Program**
   - Open the program by running the executable file. 
   - The main menu will be displayed in the console.

### 2. **Main Menu**
   The program offers the following options:
   - **(1) Change Traffic Density**: Modify the traffic density in either ETS 2 or ATS.
   - **(2) Change Pedestrian Density**: Modify the pedestrian density in either ETS 2 or ATS.
   - **(3) Reset to Default**: Reset the density settings to their default values using the backup configuration file.
   - **(0) Quit**: Exit the program.

### 3. **Changing Density**
   - After selecting an option to change the density (either traffic or pedestrian), you will be asked to choose the game (ETS 2 or ATS).
   - The program will then prompt you to enter the desired density value (from 1 to 10). You can enter any number between 1 and 10. The program will validate your input and update the configuration file accordingly.

### 4. **Resetting to Default**
   - If you want to reset the density settings to their original values, you can select the **Reset to Default** option. This will restore the configuration file from the backup.

### 5. **Backing Up Configuration Files**
   - The program automatically creates backup files of the configuration files when it is first run or if no backup exists. These backups are stored in the same folder as the original configuration files with the suffix `BackUp.cfg`.
   
### 6. **Error Handling**
   - If the program encounters an error (e.g., configuration files not found, invalid input), an error message will be displayed, and the program will allow you to try again or return to the main menu.

## Example of Usage
1. **Change Traffic Density**:
   - Select option **1** from the main menu.
   - Choose whether you want to modify **ETS 2** or **ATS**.
   - Enter a number between 1 and 10 for the new traffic density.
   - The program will update the configuration file and notify you of the successful update.

2. **Change Pedestrian Density**:
   - Select option **2** from the main menu.
   - Choose the game (ETS 2 or ATS).
   - Enter a number between 1 and 10 for the new pedestrian density.
   - The program will update the configuration file and notify you of the successful update.

3. **Reset to Default**:
   - Select option **3** from the main menu.
   - The program will restore the original configuration settings from the backup file.

### Troubleshooting
- If the configuration files cannot be found, ensure that **ETS 2** and **ATS** are installed and that the paths to the configuration files are correct.
- If an error occurs while changing the density, double-check that the values entered are within the valid range (1-10).
- If the program fails to create a backup, ensure that the program has the necessary permissions to read and write to the `Documents` folder.

## Contact
For any issues or feedback, please contact the developer on Discord [psydoooo].

---

Enjoy adjusting the traffic and pedestrian density in your favorite truck simulator games!
