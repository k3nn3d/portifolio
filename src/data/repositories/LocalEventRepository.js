import { IEventRepository } from '../../core/repositories/IEventRepository';

export class LocalEventRepository extends IEventRepository {
  async getEvents() {
    return [
      {
        id: 1,
        title: {
          pt: "ANGOTIC — Angola ICT Forum 2024",
          en: "ANGOTIC — Angola ICT Forum 2024"
        },
        location: {
          pt: "Luanda, Angola",
          en: "Luanda, Angola"
        },
        date: "2024-06-13",
        description: {
          pt: "Decorreu de 13 a 15 de Junho o ANGOTIC, e participei como expositor do projeto Petbook, desenvolvido pela Sirius® | Soluções & Tecnologia, na qual fiz parte da idealização e criação.",
          en: "ANGOTIC took place from June 13–15. I participated as an exhibitor of the Petbook project, developed by Sirius® | Soluções & Tecnologia, which I co-ideated and helped build."
        },
        images: [
          "https://media.licdn.com/dms/image/v2/D4D22AQGL7L4RPOgjPQ/feedshare-image-high-res/feedshare-image-high-res/0/1718476909269?e=1779321600&v=beta&t=fU9E3lvhmEWcO1MMEyLyESsqdpBByLnbmV0-ENqQ9qg",
          "https://media.licdn.com/dms/image/v2/D4D22AQFGpjQwoXgGSw/feedshare-shrink_1280/feedshare-shrink_1280/0/1718476910032?e=1779321600&v=beta&t=342njb35Z5J_6pYLXuNBOYi6I1E4M0-P9ql4mn6Jwyo",
          "https://media.licdn.com/dms/image/v2/D4D22AQH_2Ek9gD3teQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1718476908609?e=1779321600&v=beta&t=Y1Ebf-6i0CNzcexYeRXbMRY7KhtcIVEDjZkdXleTu2k"
        ]
      },
      {
        id: 2,
        title: {
          pt: "FITITEL — Feira de Inovação Tecnológica do ITEL",
          en: "FITITEL — ITEL Technology Innovation Fair"
        },
        location: {
          pt: "Luanda, Angola",
          en: "Luanda, Angola"
        },
        date: "2023-09-07",
        description: {
          pt: "Decorreu de 7 a 9 de Setembro a FITITEL (Feira de Inovação Tecnológica do ITEL), e participei como expositor do projeto Petbook, desenvolvido pela NovaDev, na qual fiz parte da idealização e criação.",
          en: "FITITEL (ITEL Technology Innovation Fair) took place September 7–9. I participated as an exhibitor of the Petbook project, developed at NovaDev, which I co-ideated and helped build."
        },
        images: [
          "https://media.licdn.com/dms/image/v2/D4D22AQECm_2bLp3xkA/feedshare-image-high-res/feedshare-image-high-res/0/1694601433761?e=1779321600&v=beta&t=pt8dfmhKB6v6_W1gfegZd12monoRW1tUEwY0_S0_TE0",
          "https://media.licdn.com/dms/image/v2/D4D22AQHrWm96_9GSTw/feedshare-image-high-res/feedshare-image-high-res/0/1694601402284?e=1779321600&v=beta&t=NhvkTvLLMb4FIc1JwDTBSlDst7xNer8vNA4-V2u7xs0",
          "https://media.licdn.com/dms/image/v2/D4D22AQHvq2t1qWGyLA/feedshare-shrink_1280/feedshare-shrink_1280/0/1694601435890?e=1779321600&v=beta&t=oz7CnN0Tl1MAi11c0UGd6iSuuh3woSWwVuEK22yN_2A",
          "https://media.licdn.com/dms/image/v2/D4D22AQGlQCsGKkJAbA/feedshare-image-high-res/feedshare-image-high-res/0/1694601429947?e=1779321600&v=beta&t=xyfXGwbXQnB69dbxlZR5qBK-X9o7c0IGqLaYw45iMRs",
          "https://media.licdn.com/dms/image/v2/D4D22AQH2NMJKZw348w/feedshare-image-high-res/feedshare-image-high-res/0/1694601403255?e=1779321600&v=beta&t=g47k5p1Jw0a-XsXMspZAGFSaRl4PEZCdfhzR_riN4jw"
        ]
      },
      {
        id: 3,
        title: {
          pt: "Cerimónia de Abertura — 7ª Edição do Artigo Semanal",
          en: "Opening Ceremony — 7th Edition of Artigo Semanal"
        },
        location: {
          pt: "Luanda, Angola",
          en: "Luanda, Angola"
        },
        date: "2023-08-05",
        description: {
          pt: "Foi realizada a Cerimónia de Abertura da 7ª Edição do Artigo Semanal, evento que marca mais um ciclo de produção de conteúdo técnico e editorial em Angola.",
          en: "The Opening Ceremony of the 7th Edition of Artigo Semanal took place, marking another cycle of technical and editorial content production in Angola."
        },
        images: [
          "https://media.licdn.com/dms/image/v2/D5622AQG5Eb5u0256FQ/feedshare-image-high-res/feedshare-image-high-res/0/1691352991561?e=1779321600&v=beta&t=uk74V0B6XrzNFf_hv2nSCdTwqdGZa1-dUWgV2X171BQ",
          "https://media.licdn.com/dms/image/v2/D5622AQH0xlU9auBvJQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1691353038484?e=1779321600&v=beta&t=Wc9PNq0B1QW_K2NCj0WFrl4xoTf8KBv2dxTZ_xZI-w4",
          "https://media.licdn.com/dms/image/v2/D5622AQEtUiZV8icjgQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1691352973470?e=1779321600&v=beta&t=yNsBdDhu0oYMTHWYFMe0ZhtB--fXxix8-Ka0Rsr-RI0",
          "https://media.licdn.com/dms/image/v2/D5622AQH70r1ZlO_CiQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1691352969473?e=1779321600&v=beta&t=Za_qVvKqYXq6SKMPLhw_bsrclq4ojXJX0OB6jTVWiZg",
          "https://media.licdn.com/dms/image/v2/D5622AQE_WRpkE48cSA/feedshare-image-high-res/feedshare-image-high-res/0/1691353037949?e=1779321600&v=beta&t=QX1mLUPL152gBIDBWDvPsXwwDggqAxjndyHPDK9BsYI"
        ]
      }
    ];
  }
}
