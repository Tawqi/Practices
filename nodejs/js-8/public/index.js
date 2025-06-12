const cart = document.getElementById('cart');
const search = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const form = document.getElementById('searchForm');

// Submit search on form submit (Enter or Search button)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = search.value.trim(); // Removes spaces before and after the values
  if (input) {
    window.location.href = `/searchpage/${encodeURIComponent(input)}`;
    
  }
});

// Show search suggestions as user types
search.addEventListener('input', () => {
  const Sinput = search.value.trim();

  if (!Sinput) {
    suggestions.classList.add('hidden');
    suggestions.innerHTML = '';
    return;
  }

  fetch(`/search?search=${encodeURIComponent(Sinput)}`)
    .then(res => res.json())
    .then(data => {
      suggestions.innerHTML = '';

      if (data.length > 0) {
        suggestions.classList.remove('hidden');

        data.forEach(product => {
          const li = document.createElement('li');
          const a = document.createElement('a');

          a.innerText = product.name;
          a.href = `/productpage/${encodeURIComponent(product.name)}`;
          a.classList.add('block', 'p-2', 'hover:bg-gray-200'); // Example styling

          li.appendChild(a);
          suggestions.appendChild(li);
        });
      } else {
        suggestions.classList.add('hidden');
      }
    })
    .catch(err => {
      console.error('Search error:', err);
      suggestions.classList.add('hidden');
    });
});
