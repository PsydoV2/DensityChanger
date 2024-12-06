string userProfile = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
string PFADATSCFG = Path.Combine(
    userProfile,
    "Documents",
    "American Truck Simulator",
    "config.cfg"
);
string PFADETSCFG = Path.Combine(userProfile, "Documents", "Euro Truck Simulator 2", "config.cfg");
string PFADATSCFGBCKP = Path.Combine(
    userProfile,
    "Documents",
    "American Truck Simulator",
    "configBackUp.cfg"
);
string PFADETSCFGBCKP = Path.Combine(
    userProfile,
    "Documents",
    "Euro Truck Simulator 2",
    "configBackUp.cfg"
);
chosenGame activeGame;

// Store traffic density for both games
int etsTdensity;
int etsPdensity;
int atsTdensity;
int atsPdensity;

ShowMenu();

// Show menu to the user with current density information
void ShowMenu()
{
    try
    {
        Console.Clear();
        Console.WriteLine("----- Traffic Density Changer -----");
        DisplayCurrentDensities();
        Console.WriteLine("(1) Change Traffic Density");
        Console.WriteLine("(2) Change Pedestrian Density");
        Console.WriteLine("(3) Reset to default");
        Console.WriteLine("(0) Quit");

        int choice = -1;

        do
        {
            Console.WriteLine();
            Console.Write("Choose: ");
            choice = Convert.ToInt32(Console.ReadLine());
        } while (choice < 0 || choice > 3);

        switch (choice)
        {
            case 0:
                Environment.Exit(0);
                break;
            case 1:
                ChooseGame(1);
                break;
            case 2:
                ChooseGame(2);
                break;
            case 3:
                ChooseGame(3);
                break;
            default:
                Console.WriteLine("Invalid Argument!");
                Console.Clear();
                ShowMenu();
                break;
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        Console.WriteLine("Press any key to return to the menu...");
        Console.ReadKey();
        ShowMenu();
    }
}

// Display current densities for ETS and ATS
void DisplayCurrentDensities()
{
    GetCurrentDensities();
    Console.WriteLine(); // Für bessere Lesbarkeit eine Leerzeile zu Beginn

    if (etsTdensity != -1)
    {
        Console.WriteLine($"Current Traffic Density for ETS 2: \t{etsTdensity}");
    }
    if (atsTdensity != -1)
    {
        Console.WriteLine($"Current Traffic Density for ATS: \t{atsTdensity}");
    }
    if (etsPdensity != -1)
    {
        Console.WriteLine($"Current Pedestrian Density for ETS 2: \t{etsPdensity}");
    }
    if (atsPdensity != -1)
    {
        Console.WriteLine($"Current Pedestrian Density for ATS: \t{atsPdensity}");
    }

    Console.WriteLine(); // Eine abschließende Leerzeile für bessere Lesbarkeit
}

void GetCurrentDensities()
{
    // Setze die Standardwerte auf -1, falls die Konfigurationsdateien nicht existieren
    etsTdensity = -1;
    etsPdensity = -1;
    atsTdensity = -1;
    atsPdensity = -1;

    // ETS 2 Dichte überprüfen
    if (File.Exists(PFADETSCFG))
    {
        string[] lines = File.ReadAllLines(PFADETSCFG);
        foreach (string line in lines)
        {
            if (line.StartsWith("uset g_traffic"))
            {
                string[] parts = line.Split('\"');
                if (parts.Length > 1)
                {
                    string value = parts[1].Trim();
                    // Extrahiere nur die Zahl vor dem Punkt
                    int dotIndex = value.IndexOf('.');
                    if (dotIndex >= 0)
                    {
                        value = value.Substring(0, dotIndex); // Nimmt nur den Teil vor dem Punkt
                    }
                    if (int.TryParse(value, out int etsTdensityTemp))
                    {
                        etsTdensity = etsTdensityTemp; // Setze die Dichte für ETS 2
                    }
                }
                break;
            }
        }

        foreach (string line in lines)
        {
            if (line.StartsWith("uset g_pedestrian"))
            {
                string[] parts = line.Split('\"');
                if (parts.Length > 1)
                {
                    string value = parts[1].Trim();
                    // Extrahiere nur die Zahl vor dem Punkt
                    int dotIndex = value.IndexOf('.');
                    if (dotIndex >= 0)
                    {
                        value = value.Substring(0, dotIndex); // Nimmt nur den Teil vor dem Punkt
                    }
                    if (int.TryParse(value, out int etsPdensityTemp))
                    {
                        etsPdensity = etsPdensityTemp; // Setze die Dichte für ETS 2
                    }
                }
                break;
            }
        }
    }

    // ATS Dichte überprüfen
    if (File.Exists(PFADATSCFG))
    {
        string[] lines = File.ReadAllLines(PFADATSCFG);
        foreach (string line in lines)
        {
            if (line.StartsWith("uset g_traffic"))
            {
                string[] parts = line.Split('\"');
                if (parts.Length > 1)
                {
                    string value = parts[1].Trim();
                    // Extrahiere nur die Zahl vor dem Punkt
                    int dotIndex = value.IndexOf('.');
                    if (dotIndex >= 0)
                    {
                        value = value.Substring(0, dotIndex); // Nimmt nur den Teil vor dem Punkt
                    }
                    if (int.TryParse(value, out int atsTdensityTemp))
                    {
                        atsTdensity = atsTdensityTemp; // Setze die Dichte für ATS
                    }
                }
                break;
            }
        }

        foreach (string line in lines)
        {
            if (line.StartsWith("uset g_pedestrian"))
            {
                string[] parts = line.Split('\"');
                if (parts.Length > 1)
                {
                    string value = parts[1].Trim();
                    // Extrahiere nur die Zahl vor dem Punkt
                    int dotIndex = value.IndexOf('.');
                    if (dotIndex >= 0)
                    {
                        value = value.Substring(0, dotIndex); // Nimmt nur den Teil vor dem Punkt
                    }
                    if (int.TryParse(value, out int atsPdensityTemp))
                    {
                        atsPdensity = atsPdensityTemp; // Setze die Dichte für ATS
                    }
                }
                break;
            }
        }
    }
}

// Choose the game (ETS or ATS)
void ChooseGame(int methodAfter)
{
    Console.WriteLine();
    Console.WriteLine("--- Choose the game ---");
    Console.WriteLine("(1) ETS 2");
    Console.WriteLine("(2) ATS");

    int choice = -1;

    do
    {
        Console.WriteLine();
        Console.Write("Choose: ");
        choice = Convert.ToInt32(Console.ReadLine());
    } while (choice < 1 || choice > 2);

    switch (choice)
    {
        case 1:
            activeGame = chosenGame.ETS;
            break;
        case 2:
            activeGame = chosenGame.ATS;
            break;
        default:
            Console.WriteLine("Invalid Argument!");
            Console.Clear();
            ChooseGame(methodAfter);
            break;
    }

    switch (methodAfter)
    {
        case 1:
            ChangeTrafficDensity();
            break;
        case 2:
            ChangePedDensity();
            break;
        case 3:
            ResetDef();
            break;
    }
}

// Get paths for the selected game
(string configPath, string backupPath) GetPaths()
{
    if (activeGame == chosenGame.ETS)
    {
        return (PFADETSCFG, PFADETSCFGBCKP);
    }
    else
    {
        return (PFADATSCFG, PFADATSCFGBCKP);
    }
}

// Change the traffic density
void ChangeTrafficDensity()
{
    var (configPath, backupPath) = GetPaths();

    try
    {
        // Check if the configuration file exists
        if (!File.Exists(configPath))
        {
            Console.WriteLine($"Configuration file not found: {configPath}");
            return;
        }

        // Create a backup file if it doesn't exist
        if (!File.Exists(backupPath))
        {
            File.Copy(configPath, backupPath, overwrite: true);
            Console.WriteLine("Backup file created.");
        }

        // Prompt user to enter traffic density
        int density = -1;
        Console.WriteLine();
        Console.WriteLine("Enter the traffic density (1 - 10):");

        while (true)
        {
            Console.Write("Input: ");
            string input = Console.ReadLine();

            if (int.TryParse(input, out density) && density >= 1 && density <= 10)
            {
                break; // Valid input, exit loop
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a number between 1 and 10.");
            }
        }

        Console.WriteLine($"Traffic density set to {density}.");

        // Modify the configuration file
        string[] lines = File.ReadAllLines(configPath);
        for (int i = 0; i < lines.Length; i++)
        {
            if (lines[i].StartsWith("uset g_traffic"))
            {
                lines[i] = $"uset g_traffic \"{density}\"";
                break;
            }
        }

        File.WriteAllLines(configPath, lines);
        Console.WriteLine("Configuration file updated successfully.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"An error occurred: {ex.Message}");
    }

    ReturnToMenu();
}

void ChangePedDensity()
{
    var (configPath, backupPath) = GetPaths();

    try
    {
        // Check if the configuration file exists
        if (!File.Exists(configPath))
        {
            Console.WriteLine($"Configuration file not found: {configPath}");
            return;
        }

        // Create a backup file if it doesn't exist
        if (!File.Exists(backupPath))
        {
            File.Copy(configPath, backupPath, overwrite: true);
            Console.WriteLine("Backup file created.");
        }

        // Prompt user to enter traffic density
        int density = -1;
        Console.WriteLine();
        Console.WriteLine("Enter the pedestrian density (1 - 10):");

        while (true)
        {
            Console.Write("Input: ");
            string input = Console.ReadLine();

            if (int.TryParse(input, out density) && density >= 1 && density <= 10)
            {
                break; // Valid input, exit loop
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a number between 1 and 10.");
            }
        }

        Console.WriteLine($"Pedestrian density set to {density}.");

        // Modify the configuration file
        string[] lines = File.ReadAllLines(configPath);
        for (int i = 0; i < lines.Length; i++)
        {
            if (lines[i].StartsWith("uset g_traffic"))
            {
                lines[i] = $"uset g_pedestrian \"{density}\"";
                break;
            }
        }

        File.WriteAllLines(configPath, lines);
        Console.WriteLine("Configuration file updated successfully.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"An error occurred: {ex.Message}");
    }

    ReturnToMenu();
}

// Reset the configuration file to default
void ResetDef()
{
    var (configPath, backupPath) = GetPaths();

    try
    {
        // Check if the backup file exists
        if (!File.Exists(backupPath))
        {
            Console.WriteLine($"Backup file not found: {backupPath}");
            ReturnToMenu();
            return;
        }

        // Copy the backup file to the original location
        SafeCopy(backupPath, configPath);

        // Delete the backup file
        SafeDelete(backupPath);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error copying the file: {ex.Message}");
    }

    ReturnToMenu();
}

// Safe file copy with error handling
void SafeCopy(string source, string destination)
{
    try
    {
        File.Copy(source, destination, overwrite: true);
        Console.WriteLine($"File successfully copied from {source} to {destination}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error copying the file from {source} to {destination}: {ex.Message}");
    }
}

// Safe file delete with error handling
void SafeDelete(string path)
{
    try
    {
        File.Delete(path);
        Console.WriteLine($"File successfully deleted: {path}");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error deleting the file {path}: {ex.Message}");
    }
}

// Return to the main menu
void ReturnToMenu()
{
    Console.WriteLine();
    Console.WriteLine("Press any key to return to the main menu...");
    Console.ReadKey();
    ShowMenu();
}

// Enum for the selected game
enum chosenGame
{
    ETS,
    ATS
}
