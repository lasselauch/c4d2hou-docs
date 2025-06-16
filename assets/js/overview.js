// C4D2HOU Settings Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Action buttons functionality
    const actionItems = document.querySelectorAll('.action-item');
    const explanations = document.querySelectorAll('.explanation');
    
    actionItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            
            // Update active states
            actionItems.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding explanation
            explanations.forEach(exp => {
                if (exp.getAttribute('data-explanation') === action) {
                    exp.classList.add('active');
                } else {
                    exp.classList.remove('active');
                }
            });
        });
    });
    
    // Set first action as active by default
    if (actionItems.length > 0) {
        actionItems[0].click();
    }
    
    // Dropdown functionality (placeholder - would need full implementation)
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            // Placeholder for dropdown menu functionality
            console.log('Dropdown clicked:', this.textContent);
        });
    });
    
    // Reset button functionality
    const resetButton = document.querySelector('.reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', function() {
            // Reset all settings to defaults
            const numberInputs = document.querySelectorAll('.number-input');
            numberInputs.forEach(input => {
                if (input.getAttribute('step') === '0.01') {
                    input.value = '0.01';
                }
            });
            
            // Reset text inputs
            const textInputs = document.querySelectorAll('.text-input');
            textInputs.forEach(input => {
                input.value = input.getAttribute('value') || '';
            });
            
            // Visual feedback
            this.textContent = 'Reset Complete ✓';
            setTimeout(() => {
                this.textContent = 'Reset to Default';
            }, 2000);
        });
    }
    
    // Number input validation
    const numberInputs = document.querySelectorAll('.number-input');
    numberInputs.forEach(input => {
        input.addEventListener('input', function() {
            const min = parseFloat(this.getAttribute('min'));
            const max = parseFloat(this.getAttribute('max'));
            const value = parseFloat(this.value);
            
            if (value < min) this.value = min;
            if (value > max) this.value = max;
        });
    });
});