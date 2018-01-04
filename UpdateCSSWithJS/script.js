var inputs = document.querySelectorAll('.controls input ');

function handleUpdate() {
  // dataset get all data in the element if case don't data-sizing value empty
  const suffix = this.dataset.sizing || '';

  // documentElement.style.setProperty insert element intro css - setProperty receive for 2 parameters name and value
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
