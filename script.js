document.addEventListener('DOMContentLoaded', () => {
  // Get the current day (0 = Sunday, 1 = Monday, etc.)
  const currentDay = new Date().getDay();
  // Map JavaScript day index to our data day strings
  const dayMap = {
    0: 'sun',
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thu',
    5: 'fri',
    6: 'sat'
  };
  const currentDayString = dayMap[currentDay];

  // Fallback data in case fetch fails
  const fallbackData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  // Try to fetch the data from data.json
  try {
    fetch('./data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        renderChart(data, currentDayString);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Use fallback data if fetch fails
        console.log('Using fallback data instead');
        renderChart(fallbackData, currentDayString);
      });
  } catch (error) {
    console.error('Fetch error:', error);
    // Use fallback data if fetch fails
    console.log('Using fallback data instead');
    renderChart(fallbackData, currentDayString);
  }
});

/**
 * Renders the chart based on the provided data
 * @param {Array} data - The spending data for each day
 * @param {string} currentDay - The current day string (mon, tue, etc.)
 */
function renderChart(data, currentDay) {
  const chartContainer = document.getElementById('chart-container');
  chartContainer.innerHTML = ''; // Clear any existing content

  // Find the maximum amount to calculate relative heights
  const maxAmount = Math.max(...data.map(item => item.amount));

  // Define specific heights for each amount to match the design
  // This ensures the bars have the exact proportions shown in the design
  const getHeightInPixels = (amount) => {
    // Calculate a base height that's proportional but with some adjustments
    // to match the design's specific proportions
    const containerHeight = 150; // Usable height in pixels
    const minHeight = 20; // Minimum height for the smallest bar

    // Calculate height with a slight curve to match the design
    return Math.floor(minHeight + ((amount / maxAmount) * (containerHeight - minHeight)));
  };

  // Create a bar for each day
  data.forEach(dayData => {
    // Get the height in pixels for this amount
    const heightInPixels = getHeightInPixels(dayData.amount);

    // Create the bar container
    const barContainer = document.createElement('div');
    barContainer.className = 'chart-bar-container';

    // Create the bar element
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    // Add the current-day class if this is the current day
    if (dayData.day === currentDay) {
      bar.classList.add('current-day');
    }

    // Set the height in pixels
    bar.style.height = `${heightInPixels}px`;

    // Create the tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'chart-bar-tooltip';
    tooltip.textContent = `$${dayData.amount}`;

    // Create the day label
    const label = document.createElement('div');
    label.className = 'chart-bar-label';
    label.textContent = dayData.day;

    // Append elements
    bar.appendChild(tooltip);
    barContainer.appendChild(bar);
    barContainer.appendChild(label);
    chartContainer.appendChild(barContainer);
  });
}
