/**
 * sites.js - Stores the webring site data and provides functions to access it
 *
 * This file contains the data for all sites in the webring and functions to
 * retrieve and navigate between sites.
 */

// Array of all sites in the webring with their metadata
const sites = [
    {
        id: 1,
        name: 'Big Rick Sucks Dick $BRSD',
        url: 'https://example.com/neotokyo',
        description: 'BICK RICK SUUUUUUCKS DIIIIIIIIIIIIIIIIIIIICK',
        owner: 'RICK',
        joined: '2025-01-15',
        caLink: 'https://birdeye.so/token/BRSDw2v6nY9Wd6nbW7G8vbupy7qrfpdhK7ANWWReq8kc?chain=solana',
        video: 'https://i.imgur.com/K2YcJkR.mp4',
        icon: '<img src="https://i.imgur.com/m4IoEw7.gif" alt="BRSD" class="site-icon" style="height: 30px; width: auto;"/>', // Custom BRSD GIF
        swapUrl: 'https://jup.ag/swap/SOL-BRSDw2v6nY9Wd6nbW7G8vbupy7qrfpdhK7ANWWReq8kc'
    },
    {
        id: 2,
        name: 'MOIST $MOIST',
        url: 'https://linktr.ee/moisttoken',
        description: 'LETS GET $MOIST ON $SOL 💦',
        owner: 'PAZUZU',
        joined: '2025-02-03',
        caLink: 'https://birdeye.so/token/H9D6zuYzL35aZZV4MxRc3H5nAJb8M4kxK38HCUGypump?chain=solana',
        icon: '<img src="https://i.imgur.com/C61ZPm4.gif" alt="MOIST" class="site-icon" style="height: 30px; width: auto;"/>', // Custom MOIST GIF
        swapUrl: 'https://jup.ag/swap/SOL-H9D6zuYzL35aZZV4MxRc3H5nAJb8M4kxK38HCUGypump'
    },
    {
        id: 3,
        name: 'EGG $EGG ',
        url: 'https://example.com/retrogaming',
        description: 'Energetic Greetings, Glorious Sunlit Slugs!',
        owner: 'HOMESTEAD',
        joined: '2025-03-10',
        caLink: 'https://birdeye.so/token/2JHXejK8eVYK8vSn2gmCp7prTSMmQRDwMKqr372F4v5U?chain=solana',
        icon: '<img src="https://i.imgur.com/7dVpiQC.gif" alt="EGG" class="site-icon" style="height: 30px; width: auto;"/>', // Custom EGG GIF
        swapUrl: 'https://jup.ag/swap/SOL-2JHXejK8eVYK8vSn2gmCp7prTSMmQRDwMKqr372F4v5U'
    }
];

/**
 * Returns all sites in the webring
 *
 * @return {Array} Array of all site data
 */
function getAllSites() {
    return sites;
}

/**
 * Get a site by its ID
 *
 * @param {number|string} id - The ID of the site to retrieve
 * @return {Object|null} The site object or null if not found
 */
function getSiteById(id) {
    // Convert id to number for robust comparison
    const numId = Number(id);
    return sites.find(site => site.id === numId) || null;
}

/**
 * Get the next site in the webring
 *
 * @param {number|string} currentId - The ID of the current site
 * @return {Object} The next site object
 */
function getNextSite(currentId) {
    const numId = Number(currentId);
    const currentIndex = sites.findIndex(site => site.id === numId);
    
    // Default to first site if current site not found
    if (currentIndex === -1) return sites[0];
    
    // Use modulo to wrap around to the beginning if at the end
    const nextIndex = (currentIndex + 1) % sites.length;
    return sites[nextIndex];
}

/**
 * Get the previous site in the webring
 *
 * @param {number|string} currentId - The ID of the current site
 * @return {Object} The previous site object
 */
function getPrevSite(currentId) {
    const numId = Number(currentId);
    const currentIndex = sites.findIndex(site => site.id === numId);
    
    // Default to last site if current site not found
    if (currentIndex === -1) return sites[sites.length - 1];
    
    // Use modulo with addition to handle negative indices and wrap around
    const prevIndex = (currentIndex - 1 + sites.length) % sites.length;
    return sites[prevIndex];
}

/**
 * Get a random site from the webring, optionally excluding a specific site
 *
 * @param {number|null} excludeId - Optional ID to exclude from random selection
 * @return {Object|null} A random site object or null if no sites available
 */
function getRandomSite(excludeId = null) {
    // If excludeId is provided, filter out that site
    const filteredSites = excludeId !== null 
        ? sites.filter(site => site.id !== Number(excludeId))
        : sites;
        
    // Return null if no sites are available after filtering
    if (filteredSites.length === 0) {
        return null;
    }
    
    // Select a random site from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredSites.length);
    return filteredSites[randomIndex];
}

// Export functions for use in other files
export { getAllSites, getSiteById, getNextSite, getPrevSite, getRandomSite };
