import { FlowchartData } from '../types';

export const flowchartData: FlowchartData = {
  questions: [
    {
      id: 'start',
      text: 'START HER',
      description: 'Velkommen til din investeringsguide. Lad os begynde med at finde ud af, hvad der passer bedst til din situation.',
      answers: [
        { text: 'Fortsæt', nextQuestionId: 'timeHorizon' }
      ]
    },
    {
      id: 'timeHorizon',
      text: 'Er din tidshorisont mere end 5 år?',
      description: 'Din investeringshorisont er afgørende for din investeringsstrategi.',
      answers: [
        { text: 'Ja', nextQuestionId: 'investmentGoal' },
        { text: 'Nej', nextQuestionId: 'shortTermInvestment' }
      ]
    },
    {
      id: 'shortTermInvestment',
      text: 'Med en tidshorisont på under 5 år vil det ofte være tilrådeligt at investere i mindre risikofyldte aktiver.',
      description: 'Overvej at placere dine penge på en almindelig indlånskonto eller i statsobligationer for at beskytte din kapital.',
      answers: [
        { text: 'Afslut', nextQuestionId: 'finish' }
      ],
      affiliateLinks: [
        { text: 'Åbn en Opsparingskonto hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/opsparingskonto' }
      ]
    },
    {
      id: 'investmentGoal',
      text: 'Hvad er dit mål med at investere?',
      description: 'Dit investeringsmål hjælper med at bestemme den bedste strategi for dig.',
      answers: [
        { text: 'Jeg vil gerne tilgodese mine børn', nextQuestionId: 'childSavings' },
        { text: 'Jeg vil gerne have flere penge til rådighed efter jeg runder folkepensionsalderen eller tidligst 3/5 år før', nextQuestionId: 'aldersopsparing' },
        { text: 'Jeg vil gerne kunne trække mig tilbage fra arbejdsmarkedet mere end 3/5 år før folkepensionsalderen, herunder FIRE', nextQuestionId: 'aktiesparekonto' },
        { text: 'Jeg vil gerne opbygge en formue, hvor der ikke er nogen begrænsninger angående udbetaling', nextQuestionId: 'almindepot' }
      ]
    },
    {
      id: 'childSavings',
      text: 'Opret en børneopsparing til dine børn',
      description: 'Det mest optimale produkt kommer an på dit barns alder. Vær opmærksom på at minimumskravet er 3.000 kr. Sæt en månedlig opsparing op og overvej at supplere med et almindeligt depot.',
      answers: [
        { text: 'Det har jeg gjort. Hvad nu?', nextQuestionId: 'childSavingsNext' }
      ],
      affiliateLinks: [
        { text: 'Opret Børneopsparing hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/borneopsparing' }
      ]
    },
    {
      id: 'childSavingsNext',
      text: 'Opret et almindeligt depot (frie midler) til dine børn',
      description: "Pengene skal indbetales af andre end barnets forældre. Fx bedsteforældre. Invester i danske akkumulerende aktiefonde eller ETF'er som ikke er på skats positivliste.",
      answers: [
        { text: 'Det har jeg gjort. Hvad nu?', nextQuestionId: 'childSavingsLast' }
      ],
      affiliateLinks: [
        { text: 'Åbn et Depot hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/depot' }
      ]
    },
    {
      id: 'childSavingsLast',
      text: 'Opret en aldersopsparing og/eller aktiesparekonto til dine børn',
      description: "Invester i akkumulerende ETF'er. Du kan maksimalt indbetale 5.700 kr (2024) årligt på en aldersopsparing til dit barn.",
      answers: [
        { text: 'Afslut', nextQuestionId: 'finish' }
      ],
      affiliateLinks: [
        { text: 'Opret Aldersopsparing hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/pension/aldersopsparing' },
        { text: 'Opret Aktiesparekonto hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/aktiesparekonto' }
      ]
    },
    {
      id: 'aldersopsparing',
      text: 'Opret en aldersopsparing',
      description: "Invester i akkumulerende ETF'er. Overvej først om du allerede har en aldersopsparing gennem din arbejdsmarkedspension.",
      answers: [
        { text: 'Det har jeg gjort. Hvad nu?', nextQuestionId: 'topskattegrense' }
      ],
      affiliateLinks: [
        { text: 'Opret Aldersopsparing hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/pension/aldersopsparing' }
      ]
    },
    {
      id: 'topskattegrense',
      text: 'Betaler du topskat?',
      description: 'Din skattesituation påvirker, hvilken type pensionsopsparing der er mest fordelagtig for dig.',
      answers: [
        { text: 'Ja', nextQuestionId: 'ratepension' },
        { text: 'Nej', nextQuestionId: 'under15aar' }
      ]
    },
    {
      id: 'ratepension',
      text: 'Opret en ratepension',
      description: "Indbetal indtil du enten kommer under topskattegrænsen, indtil du udnytter det fulde fradrag på ratepension eller når indbetalingsgrænsen. Invester i akkumulerende ETF'er.",
      answers: [
        { text: 'Afslut', nextQuestionId: 'finish' }
      ],
      affiliateLinks: [
        { text: 'Opret Ratepension hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/pension/ratepension' }
      ]
    },
    {
      id: 'under15aar',
      text: 'Har du mindre end 15 år til din folkepensionsalder?',
      description: 'Din alder i forhold til folkepensionsalderen påvirker dine investeringsmuligheder.',
      answers: [
        { text: 'Ja', nextQuestionId: 'ratepension' },
        { text: 'Nej', nextQuestionId: 'aktiesparekonto' }
      ]
    },
    {
      id: 'aktiesparekonto',
      text: 'Opret en aktiesparekonto',
      description: "Invester i akkumulerende ETF'er eller danske akkumulerende aktiefonde.",
      answers: [
        { text: 'Det har jeg gjort. Hvad nu?', nextQuestionId: 'almindepot' }
      ],
      affiliateLinks: [
        { text: 'Opret Aktiesparekonto hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/aktiesparekonto' }
      ]
    },
    {
      id: 'almindepot',
      text: 'Opret et almindeligt depot (frie midler)',
      description: "Invester i danske akkumulerende aktiefonde eller ETF'er som ikke er på skats positivliste.",
      answers: [
        { text: 'Afslut', nextQuestionId: 'finish' }
      ],
      affiliateLinks: [
        { text: 'Åbn et Depot hos Nordnet', url: 'https://www.nordnet.dk/dk/tjenester/konto/depot' }
      ]
    },
    {
      id: 'finish',
      text: 'Tillykke! Du har gennemført investeringsguiden.',
      description: 'Husk at regelmæssigt gennemgå og justere din investeringsstrategi i takt med at dine mål og omstændigheder ændrer sig.',
      answers: [
        { text: 'Start forfra', nextQuestionId: 'start' }
      ]
    }
  ]
};