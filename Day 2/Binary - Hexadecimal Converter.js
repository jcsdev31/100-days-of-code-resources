// This function takes a binary string and returns a cleaned version of it with
// any whitespace removed, leading zeroes added if necessary, and spaces inserted
// after every 4 characters for readability.
function cleanBinaryString(str) {
    // Remove all whitespace characters from the string.
    str = str.replace(/\s/g, "");

    // If the length of the string is not a multiple of 4, add leading zeroes to make it so.
    if (str.length % 4 !== 0) {
        let missingZeroes = 4 - (str.length % 4);
        for (let i = 1; i <= missingZeroes; i++)
            str = '0' + str;
    }

    // Insert a space after every 4 characters to make the binary string more readable.
    str = str.replace(/(.{4})/g, "$1 ");

    return str;
}

// This function takes a binary string and converts it to a hexadecimal string.
function binaryToHexadecimal(str) {
    // Check if the string contains any characters other than 0, 1, and whitespace.
    if (/[^01 ]/.test(str)) {
        console.log(`Error: Not a valid binary string!`);
        return;
    }
    
    // Clean the binary string to prepare it for conversion.
    binary = cleanBinaryString(str);

    // Define a map of hexadecimal values for each possible 4-bit combination of binary values.
    const hexMap = {
        '0000': '0', '0001': '1', '0010': '2', '0011': '3',
        '0100': '4', '0101': '5', '0110': '6', '0111': '7',
        '1000': '8', '1001': '9', '1010': 'a', '1011': 'b',
        '1100': 'c', '1101': 'd', '1110': 'e', '1111': 'f'
    };

    // Start with a "0x" prefix for the hexadecimal string.
    let hexadecimal = '0x';

    // Iterate over the binary string in groups of 4 characters (plus a space)
    // and look up the corresponding hexadecimal value in the map.
    for (let i = 0; i < binary.length; i += 5) {
        const nibble = binary.substr(i, 4);
        hexadecimal += hexMap[nibble];
    }
    
    // Log the user input, cleaned binary string, and final hexadecimal string to the console.
    console.log(`User Input: ${str} \n`);
    console.log(`Cleaned Binary String: ${binary} \n`);
    console.log(`Hexadecimal: ${hexadecimal}`);

    return hexadecimal;
}

// This function converts a hexadecimal string to binary string
function hexadecimalToBinary (str) {
    // Object to map hexadecimal to binary values
    const binaryMap = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011',
        '4': '0100', '5': '0101', '6': '0110', '7': '0111',
        '8': '1000', '9': '1001', 'a': '1010', 'b': '1011',
        'c': '1100', 'd': '1101', 'e': '1110', 'f': '1111'
    }

    // Remove the prefix '0x' if present and convert to lowercase
    str = str.toLowerCase().replace(/0x/, '');

    // Initialize the binary string
    let binary = '';

    // Loop through each character of the hexadecimal string
    for (let i = 0; i < str.length; i++) {
        
        // Check if the character is valid hexadecimal
        if (!binaryMap.hasOwnProperty(str[i])) {
            console.log(`Error: Invalid hexadecimal character: ${str[i]}`);
            return;
        }

        // Append the corresponding binary value to the binary string
        binary += binaryMap[str[i]];
    }

    // Clean up the binary string by removing leading zeros
    binary = cleanBinaryString(binary);

    // Log the user input and the cleaned binary string
    console.log(`User Input: ${str} \n`);
    console.log(`Cleaned Binary String: ${binary}`);

    // Return the binary string
    return binary;
}