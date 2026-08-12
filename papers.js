const dataUrl = 'papers.json?v=20260812-4';

function createBadgeContainer(paper) {
    const container = document.createElement('div');
    container.classList.add('badge-container');

    const venueBadge = document.createElement('span');
    venueBadge.classList.add('badge', 'venue-badge');

    const workshopVenue = paper.venue.match(/^(.+?) \((.+ workshop)\)$/);
    const venueMain = document.createElement('span');
    venueMain.classList.add('venue-main');
    venueMain.textContent = `${workshopVenue ? workshopVenue[1] : paper.venue} '${paper.year.toString().slice(2)}`;
    venueBadge.appendChild(venueMain);

    if (workshopVenue) {
        const workshopName = document.createElement('span');
        workshopName.classList.add('venue-workshop');
        workshopName.textContent = workshopVenue[2];
        venueBadge.appendChild(workshopName);
    }
    container.appendChild(venueBadge);

    paper.awards.forEach(award => {
        const awardBadge = document.createElement('span');
        awardBadge.classList.add('badge', 'award-badge');
        awardBadge.textContent = award;
        container.appendChild(awardBadge);
    });

    return container;
}

function createPaperItem(paper) {
    const item = document.createElement('li');
    item.classList.add('paper-item');
    item.appendChild(createBadgeContainer(paper));

    const details = document.createElement('div');
    details.classList.add('title-authors-wrapper');

    const title = document.createElement('div');
    title.classList.add('paper-title');
    title.textContent = paper.title.trim();
    details.appendChild(title);

    const authorsAndLinks = document.createElement('div');
    authorsAndLinks.classList.add('authors-links-wrapper');

    const authors = document.createElement('span');
    authors.textContent = paper.authors.join(', ');
    authorsAndLinks.appendChild(authors);

    paper.links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.classList.add('styled-link');
        authorsAndLinks.appendChild(anchor);
    });

    details.appendChild(authorsAndLinks);
    item.appendChild(details);
    return item;
}

function renderSelectedPublications(papers) {
    const list = document.querySelector('#selected-publications-list');
    papers.filter(paper => paper.selected).forEach(paper => {
        list.appendChild(createPaperItem(paper));
    });
}

function renderAllPublications(papers) {
    const list = document.querySelector('#publication-list');
    const grouped = papers.reduce((years, paper) => {
        (years[paper.year] = years[paper.year] || []).push(paper);
        return years;
    }, {});

    Object.keys(grouped).sort((a, b) => b - a).forEach(year => {
        const yearHeading = document.createElement('li');
        yearHeading.classList.add('year-heading');
        yearHeading.innerHTML = `<h3>${year}</h3>`;
        list.appendChild(yearHeading);

        grouped[year].forEach(paper => list.appendChild(createPaperItem(paper)));
    });
}

function showPublicationError() {
    ['#selected-publications-list', '#publication-list'].forEach(selector => {
        const message = document.createElement('li');
        message.classList.add('publication-error');
        message.textContent = 'Publications could not be loaded. Please refresh the page.';
        document.querySelector(selector).appendChild(message);
    });
}

fetch(dataUrl, { cache: 'no-store' })
    .then(response => {
        if (!response.ok) throw new Error('Publication data request failed');
        return response.json();
    })
    .then(papers => {
        renderSelectedPublications(papers);
        renderAllPublications(papers);
    })
    .catch(showPublicationError);
