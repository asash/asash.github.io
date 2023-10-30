fetch('papers.json')
    .then(response => response.json())
    .then(papers => {
        let publicationList = document.querySelector('#publications ul');

        // Group papers by year
        let groupedPapers = papers.reduce((acc, paper) => {
            (acc[paper.year] = acc[paper.year] || []).push(paper);
            return acc;
        }, {});

        // Sort years in descending order
        let sortedYears = Object.keys(groupedPapers).sort((a, b) => b - a);

        sortedYears.forEach(year => {
            // Add year title
            let yearTitle = document.createElement('li');
            yearTitle.classList.add("nobullet")
            yearTitle.innerHTML = `<h4>${year}</h4>`;
            publicationList.appendChild(yearTitle);

            groupedPapers[year].forEach(paper => {
                let listItem = document.createElement('li');
                listItem.classList.add('paper-item');


                // Container for badges
                let badgeContainer = document.createElement('div');
                badgeContainer.classList.add('badge-container');

                // Venue badge
                let venueBadge = document.createElement('span');
                venueBadge.classList.add('badge', 'venue-badge');
                venueBadge.textContent = `${paper.venue} '${paper.year.toString().slice(2)}`;
                badgeContainer.appendChild(venueBadge);

                // Awards badges
                paper.awards.forEach(award => {
                    let awardBadge = document.createElement('span');
                    awardBadge.classList.add('badge', 'award-badge');
                    awardBadge.textContent = award;
                    badgeContainer.appendChild(awardBadge);
                });
                listItem.appendChild(badgeContainer);

                // Title and Authors Wrapper
                let titleAuthorsWrapper = document.createElement('div');
                titleAuthorsWrapper.classList.add('title-authors-wrapper');

                // Title
                let titleElem = document.createElement('div');
                titleElem.innerHTML = `<strong>${paper.title}</strong>`;
                titleAuthorsWrapper.appendChild(titleElem);

                // Authors and Links Wrapper
                let authorsLinksWrapper = document.createElement('div');
                authorsLinksWrapper.classList.add('authors-links-wrapper');

                // Authors
                let authorsElem = document.createElement('span');
                authorsElem.innerHTML = `${paper.authors.join(", ")}`;
                authorsLinksWrapper.appendChild(authorsElem);

                paper.links.forEach(link => {
                    let anchor = document.createElement('a');
                    anchor.href = link.url;
                    anchor.textContent = link.name;
                    anchor.target = "_blank"; // Optional: Opens link in a new tab
                    anchor.classList.add('styled-link'); // Add the class here

                    // Add specific class based on link type
                    if (link.name.toLowerCase() === "pdf") {
                        anchor.classList.add('pdf-link');
                    } else if (link.name.toLowerCase() === "code") {
                        anchor.classList.add('code-link');
                    }

                    authorsLinksWrapper.appendChild(anchor);
                });
                titleAuthorsWrapper.appendChild(authorsLinksWrapper);
                listItem.appendChild(titleAuthorsWrapper);

                publicationList.appendChild(listItem);
            });
        });
    });