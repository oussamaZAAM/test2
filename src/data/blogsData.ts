import { Blog, User } from "../utils/interfaces";

const users: User[] = [
  {
    name: `Hamza Jakan`,
    job: `Consultant en test et automatisation`,
    description: ``,
    image: `https://i.ibb.co/pK6T2DN/user.png`,
    contact: `https://www.linkedin.com/in/hamza-jakan-18835727b`
  },
  {
    name: `Abdelkarim AJEKAL`,
    job: `Consultant en test et automatisation`,
    description: ``,
    image: `https://i.ibb.co/9wGJxdT/4140048.png`,
    contact: `https://www.linkedin.com/in/abdelkarimaj/`
  },
];

export const blogsData: Blog[] = [
  {
    id: `tests-api`,
    title: `Les tests api, pourquoi et comment ?`,
    body: [
      {
        section: 1,
        type: `image`,
        url: `https://miro.medium.com/v2/resize:fit:828/format:webp/1*sFRJH-ISgCobtCDKbnPzPQ.png`
      },
      {
        section: 2,
        type: `paragraph`,
        text: `Les tests API (Application Programming Interface) sont une partie essentielle du développement de logiciels. Ils permettent de vérifier que les interfaces de programmation de votre application fonctionnent comme prévu, en assurant la communication correcte et l’interaction entre différentes parties de logiciels.`
      },
      {
        section: 3,
        type: `header2`,
        text: `Pourquoi les tests API sont-ils importants ?`,
      },
      {
        section: 4,
        type: `image`,
        url: `https://miro.medium.com/v2/resize:fit:828/format:webp/1*zsbb6EAtxe_Iqn0_-YTWgg.png`,
        imageCaption: `Assurance fonctionnement de l’api`
      },
      {
        section: 5,
        type: `itemize`,
        items: [
          {
            title: `Fiabilité`,
            body: `Les tests API garantissent que l’interface fonctionne correctement et peut gérer les demandes prévues, les réponses, les erreurs et les performances attendues.`
          },
          {
            title: `Intégration`,
            body: `Ils permettent de vérifier que différents composants logiciels interagissent correctement entre eux.`
          },
          {
            title: `Performance`,
            body: `Les tests de performance API peuvent aider à identifier les goulots d’étranglement et à déterminer la capacité de charge de l’API`
          },
          {
            title: `Sécurité`,
            body: `Les tests API peuvent également aider à identifier les vulnérabilités potentielles dans l’API, comme les fuites de données.`
          },
        ]
      },
      {
        section: 6,
        type: `header2`,
        text: `Comment effectuer les tests API ?`,
      },
      {
        section: 7,
        type: `itemize`,
        items: [
          {
            title: `Comprendre la documentation de l’API`,
            body: `La première étape consiste à lire attentivement la documentation de l’API que vous souhaitez tester. La documentation fournira des informations sur les points d’extrémité disponibles, les paramètres requis, les méthodes HTTP supportées, les formats de données acceptés et retournés, ainsi que les éventuelles limitations ou restrictions.`
          }
        ]
      },
      {
        section: 8,
        type: `itemize`,
        items: [
          {
            title: `Configurer l’environnement de test`,
            body: `Assurez vous d’avoir un environnement de test approprié pour effectuer vos tests. Cela peut inclure l’installation de logiciels supplémentaires, la configuration de variables d’environnement, ou la création de comptes d’accès si nécessaire.`
          }
        ]
      },
      {
        section: 9,
        type: `itemize`,
        items: [
          {
            title: `Utiliser un outil de test d’API`,
            body: `Il existe de nombreux outils disponibles pour tester les API. Certains outils populaires incluent Postman, cURL, SoapUI, et Insomnia. Ces outils vous permettent d’envoyer des requêtes HTTP aux points d’extrémité ou les de l’API, de spécifier les paramètres requis, et d’analyser les réponses reçues.`
          }
        ]
      },
      {
        section: 10,
        type: `itemize`,
        items: [
          {
            title: `Tester les différentes fonctionnalités de l’API`,
            body: `Une fois que vous avez configuré votre environnement de test et choisi un outil, vous pouvez commencer à tester les différentes fonctionnalités de l’API. Cela peut inclure l’envoi de requêtes GET, POST, PUT, DELETE, ou d’autres méthodes HTTP spécifiques, en fonction des fonctionnalités fournies par l’API.`
          }
        ]
      },
      {
        section: 11,
        type: `itemize`,
        items: [
          {
            title: `Vérifier les réponses et les résultats`,
            body: `Après avoir envoyé une requête, assurez vous de vérifier la réponse reçue. Vérifiez si la réponse correspond à ce que vous attendiez, si les données sont correctes, et si les codes de statut HTTP sont appropriés. Vous pouvez également vérifier les journaux ou les rapports d’erreurs pour identifier d’éventuels problèmes.`
          }
        ]
      },
      {
        section: 12,
        type: `itemize`,
        items: [
          {
            title: `Gérer les erreurs et les exceptions`,
            body: `Pendant les tests, il est important de gérer les erreurs et les exceptions qui peuvent survenir. Assurez vous de tester les scénarios d’erreur en envoyant des requêtes incorrectes ou en simulant des conditions d’erreur spécifiques. Vérifiez si l’API renvoie des messages d’erreur appropriés et si elle gère correctement les exceptions.`
          }
        ]
      },
      {
        section: 13,
        type: `itemize`,
        items: [
          {
            title: `Automatiser les tests`,
            body: `Si vous prévoyez de tester l’API de manière régulière ou si vous souhaitez intégrer les tests dans un processus d’intégration continue, vous pouvez envisager d’automatiser les tests à l’aide d’outils tels que Newman (pour Postman), cURL avec des scripts, ou des bibliothèques de test spécifiques à votre langage de programmation.`
          }
        ]
      },
      {
        section: 14,
        type: `itemize`,
        items: [
          {
            title: `Documenter les résultats des tests`,
            body: `Il est important de documenter les résultats de vos tests, y compris les requêtes envoyées, les réponses reçues, les problèmes rencontrés, et les corrections apportées. Cela vous aidera à suivre les progrès des tests et à partager les résultats avec d’autres membres de l’équipe.`
          }
        ]
      },
      {
        section: 15,
        type: `paragraph`,
        text: `En suivant ces étapes, vous devriez être en mesure de tester efficacement une API et de vous assurer qu’elle fonctionne correctement selon les spécifications fournies.`
      },
      {
        section: 16,
        type: `paragraph`,
        text: `Il existe plusieurs types de tests API, qui sont utilisés pour vérifier le bon fonctionnement des interfaces de programmation d'applications (API). Voici quelques-uns des types de tests API les plus courants :`
      },
      {
        section: 17,
        type: `itemize`,
        items: [
          {
            title: `Tests d'intégration`,
            body: `Ces tests vérifient la communication et l'intégration entre différentes parties de l'API, telles que les modules, les services ou les composants. Ils permettent de s'assurer que les différentes parties de l'API fonctionnent correctement ensemble.`
          },
          {
            title: `Tests de performance`,
            body: `Ces tests évaluent les performances de l'API en termes de temps de réponse, de débit, de charge et de scalabilité. Ils permettent de s'assurer que l'API peut gérer un volume élevé de requêtes et de trafic sans compromettre ses performances.`
          },
        ]
      },
      {
        section: 18,
        type: `paragraph`,
        text: `Il existe de nombreux outils disponibles pour aider à automatiser ce processus, comme Postman, JMeter, et Rest-Assured pour les tests API REST, ou SoapUI pour les tests API SOAP. Ces outils peuvent aider à créer, exécuter et gérer des tests API de manière plus efficace.`
      },
      {
        section: 19,
        type: `paragraph`,
        text: `Ces outils offrent différents niveaux de fonctionnalités et de complexité, il est donc recommandé de choisir celui qui s’adapte le mieux à vos besoins spécifiques.`
      },
      {
        section: 20,
        type: `code`,
        language: `javascript`,
        code: 
`// Function to fetch data from an API
async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data: ' + {error.message});
  }
}

describe('API Tests', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  it('should fetch data from the API', async () => {
    const data = await fetchData(apiUrl);
    expect(data).toBeDefined();
    expect(data.id).toEqual(1);
    expect(data.title).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });

  it('should handle errors when fetching data', async () => {
    const invalidUrl = 'https://jsonplaceholder.typicode.com/nonexistent';
    await expect(fetchData(invalidUrl)).rejects.toThrowError('Failed to fetch data');
  });
});`
      },
      {
        section: 21,
        type: `iframe`,
        url: `https://www.youtube.com/embed/xg3CpNGyfA0?wmode=opaque&widget_referrer=https%3A%2F%2Fmedium.com%2F%40jakanhamza%2Fles-tests-api-pourquoi-et-comment-207e22a33ea2&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1`
      }
    ],
    author: users[0],
    date: new Date(`2023-07-25`),
  },
  {
    id: `test-visuel`,
    title: `Le Test Visuel`,
    body: [
      {
        section: 1,
        type: `header1`,
        text: `Qu'est-ce que le Test Visuel?`
      },
      {
        section: 2,
        type: `paragraph`,
        text: `Le test visual est une méthode de test des applications qui vérifie leur apparence et leur comportement dans l'interface utilisateur (IU) ou l'interface utilisateur graphique. L'objectif est de s'assurer que tous les éléments visuels tels que les couleurs, les images, les polices de caractères et les mises en page apparaissent correctement et restent cohérentes sur différents appareils, systèmes d'exploitation et navigateurs.`,
      },
      {
        section: 3,
        type: `image`,
        url: `/Blog/test-visuel-1.png`,
        imageCaption: `Détection de changement`
      },
      {
        section: 4,
        type: `header1`,
        text: `Pourquoi effectuer un Test Visuel?`
      },
      {
        section: 5,
        type: `paragraph`,
        text: `Les tests visuels garantissent que l'interface utilisateur du produit développé apparaît telle qu'elle est prévue pour les utilisateurs. Il permet d'atteindre cet objectif grâce à plusieurs avantages clés, notamment : `,
      },
      {
        section: 6,
        type: `itemize`,
        items: [
          {
            body: `L'identification des défauts ou des problèmes dans l'interface utilisateur`
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`
          },
        ]
      },
      {
        section: 7,
        type: `paragraph`,
        text: `En outre, les tests visuels constituent une méthode efficace pour tester les applications, permettant aux testeurs d'identifier les défauts visuels et les incohérences qui peuvent avoir un impact négatif sur l'expérience de l'utilisateur et la facilité d'utilisation de l'application.`,
      },
      {
        section: 8,
        type: `header1`,
        text: `Comment faire un Test Visuel?`,
      },
      {
        section: 9,
        type: `paragraph`,
        text: `Les tests visuels génèrent, analysent et comparent des instantanés de navigateur(snapshots) afin de détecter si des pixels ont été modifiés. Ces différences de pixels sont appelées "Visual diffs" (parfois appelés diffs perceptuels, pdiffs, diffs CSS, diffs UI). `,
      },
      {
        section: 10,
        type: `image`,
        url: `/Blog/test-visuel-2.png`,
        imageCaption: `une illustration d’un diff visuel`
      },
      {
        section: 11,
        type: `paragraph`,
        text: `Pour effectuer un test visuel, vous devez suivre les étapes suivantes :`,
      },
      {
        section: 12,
        type: `enumerate`,
        items: [
          {
            body: `Utiliser un Test Runner pour écrire et exécuter des tests.`
          },
          {
            body: `Utiliser un navigateur d'automatisation pour reproduire les actions de l'utilisateur sur l'application ou le site web.`
          },
          {
            body: `Réaliser des captures d'écran initiales des éléments de l'interface utilisateur de l'application afin de créer une base de comparaison.`
          },
          {
            body: `Exécuter le code de test en arrière-plan pour simuler les interactions de l'utilisateur et faire des captures d'écran lorsque des changements sont identifiés.`
          },
          {
            body: `Comparer les captures d'écran capturées aux images de référence afin de détecter toute différence visuelle.`
          },
          {
            body: `Comparer les captures d'écran capturées aux images de référence afin de détecter toute différence visuelle.`
          },
        ]
      },
      {
        section: 13,
        type: `header1`,
        text: `Test Visuel par rapport à Test Fonctionnel`,
      },
      {
        section: 14,
        type: `paragraph`,
        text: `Les tests visuels et fonctionnels sont deux types différents de tests logiciels. Les deux types de tests sont importants pour la qualité globale d’une application logicielle.`,
      },
      {
        section: 15,
        type: `image`,
        url: "/Blog/test-visuel-3.png",
        imageCaption: "Comparaison entre le test visuel et fonctionnel"
      },
      {
        section: 16,
        type: `header1`,
        text: `Tests visuels manuels`,
      },
      {
        section: 17,
        type: `paragraph`,
        text: `Les tests visuels manuels font référence au processus d'inspection et de vérification manuelles des aspects visuels d'une application logicielle ou d'un site web, afin de s'assurer qu'ils répondent à la conception souhaitée et aux exigences fonctionnelles. Ce type de test est généralement effectué par des testeurs humains qui utilisent leurs yeux pour évaluer l'apparence, la présentation et le comportement de l'application ou du site web.`
      },
      {
        section: 18,
        type: `header2`,
        text: `Étapes du test manuel :`,
      },
      {
        section: 19,
        type: `enumerate`,
        items: [
          {
            body: `Parcourez l'application et faites des captures d'écran de la version de base connue.`
          },
          {
            body: `Faites une autre série de captures d'écran de la dernière version de l'application.`
          },
          {
            body: `Comparez manuellement ces captures d'écran (de base par rapport à la version actuelle) pour identifier les bogues visuels.`
          }
        ]
      },
      {
        section: 20,
        type: `header1`,
        text: `Tests visuels automatisés`,
      },
      {
        section: 21,
        type: `paragraph`,
        text: `Les tests visuels automatisés consistent à utiliser des outils logiciels spécialisés pour vérifier automatiquement l'aspect visuel et le comportement d'une application logicielle ou d'un site web. Contrairement aux tests visuels manuels, qui sont effectués par des testeurs humains, les tests visuels automatisés sont réalisés à l’aide d'outils de test capables de simuler les actions d'un utilisateur humain et d'évaluer les éléments visuels d’un site web.`
      },
      {
        section: 22,
        type: `paragraph`,
        text: `Voici quelques-uns des outils permettant de réaliser des tests visuels automatisés :`
      },
      {
        section: 23,
        type: `header2`,
        text: `1. Applitools`
      },
      {
        section: 24,
        type: `image`,
        url: `/Blog/test-visuel-4.png`
      },
      {
        section: 25,
        type: `paragraph`,
        text: `Cet outil est connu pour ses tests visuels utilisant l'intelligence artificielle et ses capacités de tests intermédiaires entièrement automatisés. Il peut analyser les applications web et mobiles et identifier toute modification des éléments visuels.`
      },
      {
        section: 26,
        type: `header2`,
        text: `2. Percy`
      },
      {
        section: 27,
        type: `image`,
        url: `/Blog/test-visuel-5.png`
      },
      {
        section: 28,
        type: `paragraph`,
        text: `Cet outil est idéal pour les tests d'applications web ou de bureau. Il offre des capacités de test visuel et s'intègre à d'autres frameworks de test.`
      },
      {
        section: 29,
        type: `header2`,
        text: `3. Galen Framework`
      },
      {
        section: 30,
        type: `image`,
        url: `/Blog/test-visuel-6.png`
      },
      {
        section: 31,
        type: `paragraph`,
        text: `C’est un outil de test visuel qui offre un large éventail de fonctionnalités et d'intégrations pour aider les testeurs à automatiser leur processus de test. Il permet aux utilisateurs de tester la mise en page des applications web à l'aide d'une syntaxe simple.`
      },
      {
        section: 32,
        type: `header2`,
        text: `4. VisualEyes`
      },
      {
        section: 33,
        type: `image`,
        url: `/Blog/test-visuel-7.png`
      },
      {
        section: 34,
        type: `paragraph`,
        text: `VisualEyes is a visual testing tool that offers automated visual testing and review for web applications. It uses machine learning to detect even the slightest visual changes in web pages with heat maps.`
      },
      {
        section: 35,
        type: `header2`,
        text: `5. Happo.io`
      },
      {
        section: 36,
        type: `image`,
        url: `/Blog/test-visuel-8.png`
      },
      {
        section: 37,
        type: `paragraph`,
        text: `Happo.io est un service de test de capture d’écran multi-navigateur qui aide à prévenir les régressions visuelles et vous permet de visualiser les changements dans votre interface utilisateur (UI), Il vous permet de comparer l’apparence visuelle des composants de l’interface utilisateur avant et après les changements.`
      },
      {
        section: 38,
        type: `header1`,
        text: `Ressources`
      },
      {
        section: 39,
        type: `link`,
        text: `https://www.browserstack.com/guide/visual-testing-beginners-guide`
      },
      {
        section: 40,
        type: `link`,
        text: `https://www.geeksforgeeks.org/software-testing-visual-testing`
      },
      {
        section: 41,
        type: `link`,
        text: `https://saucelabs.com/resources/blog/what-is-visual-testing`
      },
      {
        section: 42,
        type: `link`,
        text: `https://www.youtube.com/watch?v=MXfZeE9RQDw&t=939s`
      },
      {
        section: 43,
        type: `link`,
        text: `https://docs.percy.io/v1/docs`
      },
      {
        section: 44,
        type: `link`,
        text: `https://smartbear.com/blog/what-is-visual-testing`
      }
    ],
    author: users[1],
    date: new Date(`2023-07-27`)
  }
];