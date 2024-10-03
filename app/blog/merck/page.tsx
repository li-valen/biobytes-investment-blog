'use client'
import React from 'react';
import { Navigation } from '../../components/nav'; // Import the Navigation component
import SmoothScroll from '../../components/smooth-scroll'; // Adjust the path as needed
import MerckAnalysis from '../merck/merck-charts';

const MerckPage = () => {
  return (
    <SmoothScroll>
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative bg-transparent text-white">
      {/* Navigation Bar */}
      <Navigation />

      {/* Added padding-top to the main content for indentation */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 font-sans pt-24"> {/* Adjust pt-24 as needed */}
        <h1 className="text-4xl font-bold text-white mb-6">Merck & Co.</h1>

        <h2 className="text-3xl font-semibold text-white mb-4">Thesis: Healthcare and Technology Investing Blog</h2>
        <p className="text-base leading-relaxed mb-6">
          Merck & Co. is a giant in the healthcare industry with a strong focus on research and development, making them a key player
          in pharmaceuticals and animal health. This analysis explores Merck's financials, competitive positioning, and future potential.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Companies of Interest</h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Pfizer</li>
          <li>Perrigo</li>
          <li>Vertex</li>
          <li>Merck</li>
          <li>Microsoft</li>
          <li>Johnson & Johnson (J&J)</li>
        </ul>

        <h2 className="text-3xl font-semibold text-white mb-4">Research</h2>

        <h3 className="text-2xl font-semibold text-white mb-4">Overview + Target Price (EV/EBITDA or PE)</h3>
        <p className="text-base leading-relaxed mb-6">
          Merck’s target price is based on an analysis of EV/EBITDA and P/E multiples. Merck’s market cap currently stands at $316.8 billion.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Basic Stats + Ratios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Quick Ratio</h4>
            <p className="text-sm text-white">N/A</p>
          </div>
          <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Debt to Equity Ratio</h4>
            <p className="text-sm text-white">0.9</p>
          </div>
          <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Working Capital</h4>
            <p className="text-sm text-white">$6.5 billion</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">Revenue Drivers</h3>
        <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 mb-8">
          <p className="text-base leading-relaxed mb-4">
            Merck grossed $60.1 billion in revenue in 2023, with pharmaceutical sales comprising 89% of total sales.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-bold">Pharmaceuticals:</span> $53.58 billion</li>
            <li><span className="font-bold">Animal Health:</span> $5.63 billion</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">Key Products</h3>
        <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-bold">Keytruda:</span> $25.011 billion</li>
            <li><span className="font-bold">Gardasil:</span> $8.886 billion</li>
            <li>Bravecto, ProQuad</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">Qualitative Analysis</h3>

        <h4 className="text-xl font-semibold text-white mb-2">Competitive Moat: Wide Moat</h4>
        <p className="text-base leading-relaxed mb-4">
        In a size-dominated industry, Merck & Co. stands out as a giant. With a market capitalization of 
        316.8 billion dollars they are placed them the top 5 largest pharmaceutical companies globally. 
        Their industry-leading $30.5 billion in research & development spending in 2023 shows their commitment 
        to the improvement of their pipeline which will benefit them exponentially for years to come. This 
        immense spending is more than double that of second place Roche Pharma, which proves Merck’s R&D 
        capabilities serve as an economic moat because they are able to outpace their competitors in the 
        production of new drugs by continuing to strengthen their development pipeline.
        </p>
        <p className="text-base leading-relaxed mb-4">
        * The increase (FROM 13 to 30 billion) was primarily due to higher charges for business development 
        activity in 2023, including charges of $10.2 billion for the acquisition of Prometheus, $5.5 billion 
        related to the formation of a collaboration with Daiichi Sankyo and $1.2 billion for the acquisition of Imago.
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Intangible Assets / Reputation</h4>
        <p className="text-base leading-relaxed mb-4">
        Merck and Co. is also protected by their intangible assets, such as patents for drugs like Keytruda. Keytruda 
        is the name brand of Pembrolizumab immunotherapy. This means that it has outcompeted all its competitors in 
        this field. This “Share of mind” (as Warren Buffett would say) among the consumers is one the strongest 
        economic moats that a company can have. And Keytruda isn’t the only one, Bravecto, Gardasil, and ProQuad, 
        are all the name brands in their fields. This helps promote customer loyalty as well as the flow of new 
        customers into their treatment programs.
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Diversity of Products</h4>
        <p className="text-base leading-relaxed mb-4">
        Merck also features a diverse product portfolio with a variety of product areas, such as vaccines, oncology, 
        virology, diabetes, hospital acute care, and animal health. Merck controls nearly 20% of the net animal health 
        industry revenue. With over 50 products currently on the market in the U.S., Merck is well-positioned to adjust to 
        changes in niche markets without a devastating effect on the company. 
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Necessity of Products</h4>
        <p className="text-base leading-relaxed mb-4">
        Merck makes vaccines for 10 of the 18 diseases that the CDC recommends routine vaccination for. Many of the drugs 
        that Merck manufactures are necessities to clients, and it is necessary that consumers have repeat use of these drugs 
        as well. Merck also produces drugs for rare conditions, often with no or non-competitive substitutes. 
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Porter's 5 Forces</h3>

        <h4 className="text-xl font-semibold text-white mb-2">Threat of New Entrants: Insignificant (4)</h4>
        <p className="text-base leading-relaxed mb-4">
        Researching and developing new drugs and vaccines is extremely expensive and requires a massive amount of time. Serving 
        as a coefficient to this is that once a drug is developed and has gone through trials, it still needs to be approved by 
        the FDA, which typically adds another 6 months before companies can even begin to see a return on their investment, and 
        becoming competitive in an already-occupied field is nearly impossible.
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Competitive Rivalry: Significant (1)</h4>
        <p className="text-base leading-relaxed mb-4">
        The pharmaceutical industry is one of the most competitive industries on the planet, with every new start-up and established 
        giant racing for a share of the huge pot of cash that comes with solving a global health problem. Because of this, Merck has 
        to compete for market share with numerous other competitors. Each of the top 10 pharmaceutical companies all are valued at over 
        $150 billion, leaving Merck with only an 11% market share as of Q1 2024. Many competitors compete within the same medical fields 
        as Merck which limits their ability to raise prices.
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Supplier Bargaining Power: Low (3)</h4>
        <p className="text-base leading-relaxed mb-4">
        For many of their suppliers, Merck represents a substantial portion of their business, and their ability and tendency to purchase 
        goods in large quantities gives them leverage in negotiations. In addition, there is fierce competition in many materials industries, 
        which encourages suppliers to lower their prices. Merck also tends to have long-term relationships with their suppliers, so there is 
        unlikely to be extreme variation in price between orders, other than the natural fluctuations in market price.
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Buyer Bargaining Power: Low (3)</h4>
        <p className="text-base leading-relaxed mb-4">
        Many of the drugs made by Merck are vital to the consumer which gives Merck leverage, however, many of them also have to compete for 
        use with drugs produced by other pharmaceutical companies, which balances out leverage and causes Merck to maintain a fair, steady price, 
        with the price of Keytruda in 2021 being just 3.1% higher than that of it’s release date in 2015. However, for acute hospital care products, 
        medical providers are often sizeable enough to purchase goods in large quantities, giving them negotiating power. 
        </p>

        <h4 className="text-xl font-semibold text-white mb-2">Threat of Substitutes: Moderate (2)</h4>
        <p className="text-base leading-relaxed mb-4">
        Each of Merck's products faces competition from other drugs with the same purpose. For example, Keytryda, Mercks most popular drug, is used 
        to treat certain esophageal and gastroesophageal junction cancers, but It competes with Bristol-Myers Squibb (Opdivo) and Genentech/Roche 
        (Tecentriq) for consumer use. However, brand recognition within the pharmaceutical industry is significant, and many of the drugs Merck produces, 
        like Keytruda, are the leading drugs in their fields. As well as this, it is unlikely that a consumer will switch prescribed drugs under regular 
        circumstances. 
        </p>
        
        <h2 className="text-3xl font-semibold text-white mb-4">Revenue Drivers</h2>
        <p className="text-base leading-relaxed mb-6">
          In 2023, Merck grossed just over 60 billion dollars in revenue.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Sales</h3>
        
        <h4 className="text-xl font-semibold text-white mb-4">Pharmaceutical</h4>
        <p className="text-base leading-relaxed mb-6">
          Pharmaceutical sales comprised 89% or $53.58 billion of their $60.12 billion total sales, a 3% increase from 2022. 
          $25.011 billion, or 50% of that, belongs to Keytruda alone. Demand for Keytruda rose 19% from 2022 to 2023. 
          The second highest-grossing drug is Gardasil at $8.886 billion in revenue, or 16%.
        </p>
        <h4 className="text-xl font-semibold text-white mb-4">Animal Health</h4>
        <p className="text-base leading-relaxed mb-6">
          Animal Health earned $5.63 billion in 2023. Most of this is from livestock products ($3.337 billion) and companion 
          animal drugs and vaccines account for the remaining $2.29 billion. Merck’s animal health sector has been steadily growing 
          in annual revenue for the last decade at a rate of approximately 6.5% per annum.
        </p>

        <h4 className="text-xl font-semibold text-white mb-4">Strategic Partnerships</h4>
        <h5 className="text-lg font-semibold text-white mb-4">Daiichi Sankyo Co.</h5>
        <p className="text-base leading-relaxed mb-6">
          Merck’s multi-faceted partnership with Japanese Pharmaceutical Daiichi Sankyo is beneficial for the global expansion 
          of deruxtecan. Merck is assisting Daiichi Sankyo in globalizing their oncology drugs Patritumab, Ifinatamab, and 
          Raludotatug Deruxtecan. Merck’s role in this partnership involves the introduction of these drugs onto the global market. 
          Since they did not develop these drugs, they are required to pay a royalty for every product sold, up to $16.5 billion 
          with the potential of an extension up to $22 billion. Additionally, Merck paid $4 billion upfront at the commencement 
          of the deal and an additional $1.5 billion over the two following years. Payments to Daiichi totaled $5.5 billion in 2023. 
          These deruxtecan group drugs treat adult patients with locally advanced or metastatic EGFR-mutated non-small cell lung cancer, 
          which previously had been treated with two or more systemic therapies. However, during the approval process for the 
          patritumab variant, there was an issue with a third-party manufacturing facility, causing a delay. Luckily, the problem 
          was not a result of the drug itself, so this issue is merely a delay and not a major setback. This partnership also 
          extends to Merck’s MK-6070 T-Cell engager, where Daiichi is paying Merck $170 million for joint-ventureship.
        </p>

        <h2 className="text-3xl font-semibold text-white mb-4">Notable Acquisitions</h2>
        <h3 className="text-2xl font-semibold text-white mb-4">Harpoon Therapeutics</h3>
        <p className="text-base leading-relaxed mb-6">
          In January 2024, Merck acquired Harpoon Therapeutics for $680 million. Harpoon Therapeutics, a San Francisco-based 
          immuno-oncology company, primarily focuses on T-cell engagement against cancerous tumors. Dr. Dean Li, President 
          of Merck Research Laboratories, stated that the purpose of this purchase was to “augment and diversify our oncology 
          pipeline with innovative approaches to help people with cancer worldwide." This acquisition synergizes well with 
          their pre-existing partnership with Daiichi Sankyo, which has ongoing R&D on T-cell engagers.
        </p>
        <p className="text-base leading-relaxed mb-6">
          On their last financial statement in 2022, Harpoon reported a net income loss of $67.7 million, which was 72% less 
          than the previous year ($116 billion). This resulted in a $20.40 loss of earnings per share. However, these numbers 
          are to be expected of medical startups still in their developmental stages, and there are no anticipated issues with 
          the financial liabilities of this acquisition.
        </p>
        
        <h2 className="text-3xl font-semibold text-white mb-4">ESG Analysis</h2>

        <h3 className="text-2xl font-semibold text-white mb-4">Environmental</h3>
        <p className="text-base leading-relaxed mb-6">
          CSR Hub has ranked Merck in the 97th percentile for ESG performance. According to MSCI, Merck is holistically an 
          environmentally conscious company that has set clear goals for decarbonization, aiming to hit net zero by 2030. 
          MSCI’s Implied Temperature Rise of 1.3 degrees Celsius for Merck suggests that the company aligns with the Paris 
          Agreement. Merck stated in their 2022-2023 impact report that its mission as a company is in line with several of 
          the UN’s Sustainable Development Goals. Merck has set clear goals for their ESG and sustainability.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Social</h3>
        <p className="text-base leading-relaxed mb-6">
          Merck has used its pharmaceutical products to expand access to healthcare globally. Notably, Merck has invested 
          heavily in providing quality healthcare products and services to low- and middle-income countries (LMICs) and 
          underserved populations in the U.S. They surpassed their goal of 30 million people by reaching 33.6 million people. 
          They have set clear goals for workforce diversity, aiming for a composition of 40 percent women, 10 percent Black, 
          and 10 percent Latino. They are also on track to exceed their current inclusion index score. Women represented 
          more than half of Merck's new hires globally, and in the United States, 47 percent of new hires came from 
          underrepresented ethnic groups. 45% of Merck’s electricity is sourced from renewable sources, and they are on 
          track to continue increasing that percentage. They have reduced operational emissions by 9% and state that there 
          will be significantly greater offsets in 2025. Merck has made significant strides in promoting access to health 
          across the world, administering hundreds of millions of doses of vaccines and supporting numerous individuals 
          through charitable efforts like Merck for Mothers and the MECTIZAN donation program. Overall, while Merck has 
          room for improvement in meeting their goals for environmental sustainability, workforce diversity, and impact, 
          they have a clear and actionable plan and have made progress on most of their goals. Given their current trajectory, 
          they are well-positioned to manage ESG-related risks.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Governance</h3>
        <p className="text-base leading-relaxed mb-6">
          In Warren Buffett’s *The Essays of Warren Buffett: Lessons for Corporate America*, he outlines three types of corporate 
          governance structures. Merck & Co. falls under the first of these, the “manager/owner situation,” since they have 
          no single controlling shareholder. Instead, a CEO works under the oversight of a board of directors. This type of 
          governance is common but can be problematic. In the absence of centralized power, it becomes more challenging to 
          implement changes, as one must push for the approval of the entire board rather than a single owner. This complicates 
          day-to-day management and can foster an environment where mediocrity is tolerated, especially in the hard-to-replace 
          role of a CEO. The relationship between the director and the board is crucial; they must hold each other to the 
          highest standards, but this structure is well-suited for long-term management.
        </p>
        <p className="text-base leading-relaxed mb-6">
          At Merck, Robert M. Davis serves as both the CEO and chairman of the board. He has held the position of Chief Executive 
          Officer for over three years and chairman of the board for just under two. Prior to this, he served as president, 
          executive vice president, and CFO for Merck. Davis has held leadership roles at Baxter International, including 
          president of medical products business, corporate vice president, CFO, and Treasurer. He also worked his way up the 
          ladder during his 14-year tenure at Eli Lilly, concluding as Director of Corporate Financial Planning in 2004. 
          Since Davis took over in July 2021, Merck has completed the acquisitions of Imago Biosciences, Harpoon Therapeutics, 
          and Prometheus Biosciences, as well as partnerships with Daiichi Sankyo Co. and Kelun Biotech. These acquisitions 
          have more than doubled average annual R&D spending in 2023, demonstrating Davis’ commitment to growing the company 
          in size and scope.
        </p>
        <h2 className="text-3xl font-semibold text-white mb-4">Financial Statement Analyses</h2>

        <h3 className="text-2xl font-semibold text-white mb-4">Balance Sheet</h3>
        <h4 className="text-xl font-semibold text-white mb-4">Working Capital</h4>
        <p className="text-base leading-relaxed mb-6">
          Merck ended 2023 with positive $6.5 billion in working capital. This is a healthy amount for a company of Merck’s 
          size and tendencies. It is not too high to indicate that they are not adequately investing into the growth of the 
          company or leveraging debt opportunities, nor is it too low to suggest excessive inventory that they are unable to sell. 
          This amount provides them with sufficient room to continue their financial ventures and expand at a consistent 
          and safe rate into the future.
        </p>
        <h4 className="text-xl font-semibold text-white mb-4">Asset Performance</h4>
        <p className="text-base leading-relaxed mb-6">
          Merck had a return on assets of 0.028% in 2023. This was a startling 97% decrease from 2022, when it was 13.5%. The 
          reason for this was their massive R&D spending that came with high upfront costs, temporarily damaging the ROA.
        </p>
        <h4 className="text-xl font-semibold text-white mb-4">Capital Structure</h4>
        <p className="text-base leading-relaxed mb-6">
          Merck had a debt/equity ratio of 0.9 at the end of 2023. A D/E ratio &lt;1 means a company holds more long-term debts 
          than equity. A strong D/E ratio is typically in the 1-1.5 range. Merck has historically stayed below the 1:1 bar, 
          which is typical of the industry and shows that Merck is still investing heartily in their company's growth.
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4">Cash Flow</h3>
        <p className="text-base leading-relaxed mb-6">
          Merck's free cash flow (FCF) for 2023 was $9.143 billion, a 38% decline from 2022. This follows 70% and 172% increases 
          in 2022 and 2021, respectively. The growth difference can be attributed to the mere $1.442 billion of EBIAT. Merck’s 
          EBIT was already 1/6th that of the previous year at $2.954 billion, coupled with a nearly quintupled tax rate, 
          severely impacting the Free Cash Flow for that year. With a 2.71% dividend payout, Merck is set to pay $1.02 billion 
          in dividends this year. Merck’s cash flow/net sales ratio was 0.26%—meaning for every dollar of sales, they generate 
          a quarter in cash.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Income Statement</h3>
        <p className="text-base leading-relaxed mb-6">
          With a 97.4% profit margin, Merck earned a substantial $60.1 billion in revenue in 2023, a mere 1.4% increase from 2022, 
          following two strong years in which the growth rate averaged nearly 20%. Merck reported nearly $3 billion of EBIT, 
          which was only 4.9% of their sales and an 84% decrease from the previous year. Over half ($1.5 billion) of this was 
          taxed due to acquisitions and partnerships.
        </p>
        <MerckAnalysis />

      </div>
    </div>
    </SmoothScroll>
  );
};

export default MerckPage;
