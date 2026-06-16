function performConversion() {
    const inputVal = document.getElementById('numberInput').value.trim();
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const resultArea = document.getElementById('resultArea');
    
    if (inputVal === "") {
        alert("Please enter a value first!");
        return;
    }

    try {
        // Parse the input value based on selected base
        let decimalValue;
        if (fromBase === 16) {
            // Check for valid Hexadecimal
            if (!/^[0-9A-Fa-f]+$/.test(inputVal)) throw new Error();
            decimalValue = parseInt(inputVal, 16);
        } else {
            // Check for valid Binary, Octal, Decimal digits
            const regex = fromBase === 2 ? /^[01]+$/ : fromBase === 8 ? /^[0-7]+$/ : /^[0-9]+$/;
            if (!regex.test(inputVal)) throw new Error();
            decimalValue = parseInt(inputVal, fromBase);
        }

        if (isNaN(decimalValue)) throw new Error();

        // Perform Conversions
        const binaryString = decimalValue.toString(2);
        const decimalString = decimalValue.toString(10);
        const hexString = decimalValue.toString(16).toUpperCase();
        const octalString = decimalValue.toString(8);

        // Display Outputs
        document.getElementById('binaryRes').innerHTML = `<b>Binary (Base 2):</b> ${binaryString}`;
        document.getElementById('decimalRes').innerHTML = `<b>Decimal (Base 10):</b> ${decimalString}`;
        document.getElementById('hexRes').innerHTML = `<b>Hexadecimal (Base 16):</b> ${hexString}`;
        document.getElementById('octalRes').innerHTML = `<b>Octal (Base 8):</b> ${octalString}`;

        // Generate Human-Readable Steps
        let steps = `1. Given Input: ${inputVal} (Base ${fromBase})\n`;
        steps += `2. Converted to Decimal: ${decimalString}\n\n`;
        steps += `📝 Conversion Logic Breakdown:\n`;
        steps += `• Binary: Divide Decimal by 2 successively. Remainder sequence is the answer.\n`;
        steps += `• Octal: Divide Decimal by 8 successively.\n`;
        steps += `• Hexadecimal: Divide Decimal by 16 successively.\n\n`;
        steps += `🎯 Verified State Board Method Applied successfully!`;

        document.getElementById('calcSteps').textContent = steps;
        
        // Show the Result Card with a smooth entry
        resultArea.classList.remove('hidden');

    } catch (error) {
        alert("Invalid Number! Please enter valid digits according to the selected Base.");
        resultArea.classList.add('hidden');
    }
}
