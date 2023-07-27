import { Blog, User } from "../interfaces";

const users: User[] = [
  {
    name: "Hamza Jakan",
    job: "Consultant en test et automatisation",
    description: "",
    image: "https://i.ibb.co/pK6T2DN/user.png",
    contact: "https://www.linkedin.com/in/hamza-jakan-18835727b"
  },
  {
    name: "Abdelkarim AJEKAL",
    job: "Consultant en test et automatisation",
    description: "",
    image: "https://media.licdn.com/dms/image/D5603AQHjb_yvd732NQ/profile-displayphoto-shrink_400_400/0/1667845689631?e=1695859200&v=beta&t=or3z9e1CxZcogD73Ej0hSjxhYbKjqCl9WFzh1Bj8jBk",
    contact: "https://www.linkedin.com/in/abdelkarimaj/"
  },
];

export const blogsData: Blog[] = [
  {
    id: "tests-api",
    title: "Les tests api , pourquoi et comment ?",
    body: [
      {
        section: 1,
        type: "image",
        url: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*sFRJH-ISgCobtCDKbnPzPQ.png"
      },
      {
        section: 2,
        type: "paragraph",
        text: "Les tests API (Application Programming Interface) sont une partie essentielle du développement de logiciels. Ils permettent de vérifier que les interfaces de programmation de votre application fonctionnent comme prévu, en assurant la communication correcte et l’interaction entre différentes parties de logiciels."
      },
      {
        section: 3,
        type: "question",
        text: "Pourquoi les tests API sont-ils importants ?",
      },
      {
        section: 4,
        type: "image",
        url: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*zsbb6EAtxe_Iqn0_-YTWgg.png",
        imageCaption: "Assurance fonctionnement de l’api"
      },
      {
        section: 5,
        type: "itemize",
        items: [
          {
            title: "Fiabilité",
            body: "Les tests API garantissent que l’interface fonctionne correctement et peut gérer les demandes prévues, les réponses, les erreurs et les performances attendues."
          },
          {
            title: "Intégration",
            body: "Ils permettent de vérifier que différents composants logiciels interagissent correctement entre eux."
          },
          {
            title: "Performance",
            body: "Les tests de performance API peuvent aider à identifier les goulots d’étranglement et à déterminer la capacité de charge de l’API"
          },
          {
            title: "Sécurité",
            body: "Les tests API peuvent également aider à identifier les vulnérabilités potentielles dans l’API, comme les fuites de données."
          },
        ]
      },
      {
        section: 6,
        type: "question",
        text: "Comment effectuer les tests API ?",
      },
      {
        section: 7,
        type: "itemize",
        items: [
          {
            title: "Comprendre la documentation de l’API",
            body: "La première étape consiste à lire attentivement la documentation de l’API que vous souhaitez tester. La documentation fournira des informations sur les points d’extrémité disponibles, les paramètres requis, les méthodes HTTP supportées, les formats de données acceptés et retournés, ainsi que les éventuelles limitations ou restrictions."
          }
        ]
      },
      {
        section: 8,
        type: "itemize",
        items: [
          {
            title: "Configurer l’environnement de test",
            body: "Assurez vous d’avoir un environnement de test approprié pour effectuer vos tests. Cela peut inclure l’installation de logiciels supplémentaires, la configuration de variables d’environnement, ou la création de comptes d’accès si nécessaire."
          }
        ]
      },
      {
        section: 9,
        type: "itemize",
        items: [
          {
            title: "Utiliser un outil de test d’API",
            body: "Il existe de nombreux outils disponibles pour tester les API. Certains outils populaires incluent Postman, cURL, SoapUI, et Insomnia. Ces outils vous permettent d’envoyer des requêtes HTTP aux points d’extrémité ou les de l’API, de spécifier les paramètres requis, et d’analyser les réponses reçues."
          }
        ]
      },
      {
        section: 10,
        type: "itemize",
        items: [
          {
            title: "Tester les différentes fonctionnalités de l’API",
            body: "Une fois que vous avez configuré votre environnement de test et choisi un outil, vous pouvez commencer à tester les différentes fonctionnalités de l’API. Cela peut inclure l’envoi de requêtes GET, POST, PUT, DELETE, ou d’autres méthodes HTTP spécifiques, en fonction des fonctionnalités fournies par l’API."
          }
        ]
      },
      {
        section: 11,
        type: "itemize",
        items: [
          {
            title: "Vérifier les réponses et les résultats",
            body: "Après avoir envoyé une requête, assurez vous de vérifier la réponse reçue. Vérifiez si la réponse correspond à ce que vous attendiez, si les données sont correctes, et si les codes de statut HTTP sont appropriés. Vous pouvez également vérifier les journaux ou les rapports d’erreurs pour identifier d’éventuels problèmes."
          }
        ]
      },
      {
        section: 12,
        type: "itemize",
        items: [
          {
            title: "Gérer les erreurs et les exceptions",
            body: "Pendant les tests, il est important de gérer les erreurs et les exceptions qui peuvent survenir. Assurez vous de tester les scénarios d’erreur en envoyant des requêtes incorrectes ou en simulant des conditions d’erreur spécifiques. Vérifiez si l’API renvoie des messages d’erreur appropriés et si elle gère correctement les exceptions."
          }
        ]
      },
      {
        section: 13,
        type: "itemize",
        items: [
          {
            title: "Automatiser les tests",
            body: "Si vous prévoyez de tester l’API de manière régulière ou si vous souhaitez intégrer les tests dans un processus d’intégration continue, vous pouvez envisager d’automatiser les tests à l’aide d’outils tels que Newman (pour Postman), cURL avec des scripts, ou des bibliothèques de test spécifiques à votre langage de programmation."
          }
        ]
      },
      {
        section: 14,
        type: "itemize",
        items: [
          {
            title: "Documenter les résultats des tests",
            body: "Il est important de documenter les résultats de vos tests, y compris les requêtes envoyées, les réponses reçues, les problèmes rencontrés, et les corrections apportées. Cela vous aidera à suivre les progrès des tests et à partager les résultats avec d’autres membres de l’équipe."
          }
        ]
      },
      {
        section: 15,
        type: "paragraph",
        text: "En suivant ces étapes, vous devriez être en mesure de tester efficacement une API et de vous assurer qu’elle fonctionne correctement selon les spécifications fournies."
      },
      {
        section: 16,
        type: "paragraph",
        text: "Il existe plusieurs types de tests API, qui sont utilisés pour vérifier le bon fonctionnement des interfaces de programmation d'applications (API). Voici quelques-uns des types de tests API les plus courants :"
      },
      {
        section: 17,
        type: "itemize",
        items: [
          {
            title: "Tests d'intégration",
            body: "Ces tests vérifient la communication et l'intégration entre différentes parties de l'API, telles que les modules, les services ou les composants. Ils permettent de s'assurer que les différentes parties de l'API fonctionnent correctement ensemble."
          },
          {
            title: "Tests de performance",
            body: "Ces tests évaluent les performances de l'API en termes de temps de réponse, de débit, de charge et de scalabilité. Ils permettent de s'assurer que l'API peut gérer un volume élevé de requêtes et de trafic sans compromettre ses performances."
          },
        ]
      },
      {
        section: 18,
        type: "paragraph",
        text: "Il existe de nombreux outils disponibles pour aider à automatiser ce processus, comme Postman, JMeter, et Rest-Assured pour les tests API REST, ou SoapUI pour les tests API SOAP. Ces outils peuvent aider à créer, exécuter et gérer des tests API de manière plus efficace."
      },
      {
        section: 19,
        type: "paragraph",
        text: "Ces outils offrent différents niveaux de fonctionnalités et de complexité, il est donc recommandé de choisir celui qui s’adapte le mieux à vos besoins spécifiques."
      },
      {
        section: 20,
        type: "iframe",
        url: "https://www.youtube.com/embed/xg3CpNGyfA0?wmode=opaque&widget_referrer=https%3A%2F%2Fmedium.com%2F%40jakanhamza%2Fles-tests-api-pourquoi-et-comment-207e22a33ea2&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1"
      }
    ],
    author: users[0],
    date: new Date("2023-07-25"),
  },
];