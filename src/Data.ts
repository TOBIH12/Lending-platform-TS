import FundImg1 from '../src/assets/audit-1556218-1317513 1.png';
import FundImg2 from '../src/assets/insurance-1850823-1571146 1.png';
import Solana from './assets/solana-sol-logo 1.png';
import Binance from './assets/Binance.png';
import Bitcoin from './assets/bitcoin-btc-logo 1.png';
import Polkadot from './assets/Polkadot.png';
import Ethereum from './assets/Ethereum.png';
import Algo from './assets/ALOG.png';
import FundImg3 from '../src/assets/202-2022190_free-vector-graphic-coding-language-icon-removebg-preview 1.png';



export const DummyFundsData = [
    {
        image: FundImg1,
        title: 'Audited smart contracts',
        description: 'Our smart contracts have been audited by leading blockchain security auditors Slowmist.'
    },
    {
        image: FundImg2,
        title: 'Insurance fund',
        description: '10% of the interest paid by borrowers goes to an insurance fund used in the event that undercollaterized loans are not properly liquidated.'
    },
    {
        image: FundImg3,
        title: 'Open source',
        description: 'Interoperability and open source are among the founding principles of Defi, Which Tectonic is proudly commited to.'
    },
]

type MarketArray= {
    image: string
    initials: String
    title: String
    supply: String
    supplyApy: String
    borrow: String
    borrowApy: String
}


export const DummyMarketStat: MarketArray[] = [
    {
        image: Solana,
        initials: 'SOL',
        title: 'Solana',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
    {
        image: Binance,
        initials: 'BNB',
        title: 'Binance',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
    {
        image: Bitcoin,
        initials: 'BTC',
        title: 'Bitcoin',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
    {
        image: Polkadot,
        initials: 'DOT',
        title: 'Polkadot',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
    {
        image: Ethereum,
        initials: 'ETH',
        title: 'Ethereum',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
    {
        image: Algo,
        initials: 'ALGO',
        title: 'Algorand',
        supply: '$225M',
        supplyApy: '4.2%',
        borrow: '$7.3M',
        borrowApy:'3.5%'
    },
]