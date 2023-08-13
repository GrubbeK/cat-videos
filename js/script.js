document.addEventListener('DOMContentLoaded', function () {
  const shareButton = document.getElementById('share-button');
  const sharedLinks = document.getElementById('shared-links');
  
  shareButton.addEventListener('click', function () {
    const linkTitle = document.getElementById('link-title').value;
    const linkURL = document.getElementById('link-url').value;
    
    if (linkTitle && linkURL) {
      const linkContainer = document.createElement('div');
      linkContainer.className = 'link-container';

      const link = document.createElement('a');
      link.href = linkURL;
      link.target = '_blank'; // Open link in a new tab
      link.textContent = linkTitle;

      linkContainer.appendChild(link);
      sharedLinks.appendChild(linkContainer);

      // Clear input fields
      document.getElementById('link-title').value = '';
      document.getElementById('link-url').value = '';
    }
  });
});
