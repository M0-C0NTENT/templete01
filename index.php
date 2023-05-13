<?php
// Retrieve the user input from the form
$websiteName = $_POST["website-name"];
$colorScheme = $_POST["color-scheme"];
$content = $_POST["content"];

// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "website_generator";
$conn = new mysqli($servername, $username, $password, $dbname);

// Insert the user input into the database
$stmt = $conn->prepare("INSERT INTO websites (name, color_scheme, content) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $websiteName, $colorScheme, $content);
$stmt->execute();

// Generate the code for the website
$code = "<html>\n";
$code .= "<head>\n";
$code .= "<title>" . $websiteName . "</title>\n";
$code .= "<style>\n";
$code .= "body {\n";
$code .= "background-color: " . $colorScheme . ";\n";
$code .= "}\n";
$code .= "</style>\n";
$code .= "</head>\n";
$code .= "<body>\n";
$code .= $content . "\n";
$code .= "</body>\n";
$code .= "</html>";

// Save the generated code to a file
$file = fopen($websiteName . ".html", "w");
fwrite($file, $code);
fclose($file);

// Provide the user with a link to the generated website
echo "Your website has been generated. Click <a href='" . $websiteName . ".html'>here</
