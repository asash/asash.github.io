# **From Netnews to Ethics: A Historical Overview of Recommender Systems** 

On Monday, June 5th, 2023, the University of Glasgow [hosted a talk](https://samoa.dcs.gla.ac.uk/events/viewtalk.jsp?id=18965) by [Alan Said](https://www.alansaid.com/), an esteemed researcher from the University of Gothenburg. Titled "From Netnews to Ethics: A Historical Overview of Recommender Systems," the talk traced the evolution of recommender systems, reflecting upon their challenges, successes, and prospective future. 

Alan’s talk was an excellent overview of recommender systems' evolution and covered some key papers in the domain of recommender systems. Alan grouped the contributions into three generations of recommender systems: (i) early nearest neighbours and pattern-based recommender systems, (ii) matrix-factorisation-based recommender systems for rating prediction, and (iii)modern deep-learning-based recommender systems. 

This post summarises the key points discussed during the session.


## **1st Generation of Recommender Systems: 90s-00s**

The 1st generation of recommender systems was pretty simple, focusing on intuitive algorithms and an uncomplicated relation between data and users. 



* [Cover, T. and Hart, P., 1967. Nearest neighbor pattern classification](https://ieeexplore.ieee.org/document/1053964) introduced the Nearest Neighbours Algorithm, which steered RecSys work for years.
* Karlgren's 1990 [white paper on algebra for recommendations](https://www.diva-portal.org/smash/get/diva2:931533/FULLTEXT01.pdf) gave the first modern definition of recommender systems.
* Goldberg et al.'s [1992 paper](https://dl.acm.org/doi/10.1145/138859.138867) first coined the term "Collaborative Filtering", assuming users help to filter email lists based on reactions to the emails.
* The [Grouplens paper](https://dl.acm.org/doi/abs/10.1145/192844.192905) 1994 provided one of the earliest descriptions of user-based collaborative filtering in recommender systems.
* [Sarwar et al.'s paper in 2001](https://dl.acm.org/doi/10.1145/371920.372071) initiated research into item-based collaborative filtering.


## **2nd Generation of Recommender Systems: 00s-10s**

[The Netflix prize](https://en.wikipedia.org/wiki/Netflix_Prize) competition heavily influenced the 2nd generation. The complexity of algorithms increased, making them less intuitive.



* [Funk's 2006 blog post](https://sifter.org/simon/journal/20061211.html) first introduced matrix factorisation for recommender systems, leading to the creation of the FunkSVD algorithm.
* Koren's [2009 paper](https://dl.acm.org/doi/abs/10.1145/1557019.1557072) added temporal dynamics to RecSys.
* The [2009 paper by Koren, Bell, and Volinsky](https://ieeexplore.ieee.org/document/5197422) became the main paper on matrix factorisation techniques.


## **3rd Generation of Recommender Systems: 10s-20s**

The third generation of recommender systems saw a significant shift, with the systems converging with Information Retrieval. This era introduced the widespread use of implicit feedback, an increasing reliance on deep learning and the development of less intuitive algorithms that were more challenging to explain.



* Amatriain, in his [2011 blog post](http://technocalifornia.blogspot.be/2011/04/recommender-systems-were-doing-it-all.html), sparked the debate on the need to treat recommendations as a ranking task rather than a recommendation task and to use metrics like NDCG and MAP rather than MSE or RMSE.
* A [Youtube blog post from 2009](http://web.archive.org/web/20090923080103/http://youtube-global.blogspot.com/2009/09/five-stars-dominate-ratings.html) shared insight into how 5-star reviews dominated YouTube ratings. The post argued for replacing the traditional star ratings system with a simpler like/dislike approach.
* Covington, Adams, and Sargin's [2016 paper](https://dl.acm.org/doi/abs/10.1145/2959100.2959190) about deep learning for YouTube recommendations introduced deep learning for RecSys. It is one of the first mainstream papers on the topic and presents a simple (by today's standards) network recommender that uses deep learning. The paper was considered revolutionary at the time.
* Liu et al.'s [2022 paper](https://arxiv.org/abs/2209.07663) presented a deep learning-based system for short video recommendations. The work came from ByteDance (the company that owns TikTok), generating significant interest in the community. Although the paper does not mention TikTok explicitly, it provides considerable detail about data organisation and infrastructure.

However, a [2019 paper](https://arxiv.org/abs/1907.06902) by Ferrari Dacrema et al. questioned the progress made by modern deep-learning approaches, suggesting that many improvements could be attributed to insufficient training or poor hyperparameter tuning. This paper echoed an earlier IR paper ([Armstrong et al., 2009](https://dl.acm.org/doi/10.1145/1645953.1646031)) with a similar critique.


## **What Now (4th Generation?): 20s-now**

The 4th generation, still in its early stages, sees a rise in the use of Large Language Models (LLMs) for the recommendation, as pointed out in [Wu et al.'s 2023 survey paper](https://arxiv.org/abs/2305.19860). 


## **What is Next?**

Future trends suggest a shift towards complex interconnected metrics rather than single metric optimisation. Additional aspects, such as diversity, transparency, and accountability,  are becoming increasingly important.

Emerging guidelines for Responsible AI for recommendations are set to influence the future of RecSys:



* The [European Commission's Ethics guidelines for trustworthy AI](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai) encourage the development of responsible AI systems, with particular relevance for RecSys.
* Similarly, the [Internet Information Service Algorithmic Recommendation Management Provisions](https://digichina.stanford.edu/work/translation-internet-information-service-algorithmic-recommendation-management-provisions-effective-march-1-2022/) from China's Cyber Space Administration provide regulatory guidance.

Parallel movements are also taking place in the US. 

Recommender Systems have come a long way from their inception, but they continue to evolve, focusing on better user engagement and ethical alignment. The way forward is an exciting confluence of technology, ethical considerations, and an increased understanding of user dynamics.
