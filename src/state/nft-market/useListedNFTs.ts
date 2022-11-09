import { gql, useQuery } from "@apollo/client";
import useSigner from "../signer";
import { NFT_MARKET_ADDRESS } from "./config";
import { parseRawNFT } from "./helpers";
import {
    GetListedNFTs,
    GetListedNFTsVariables,
} from "./__generated__/GetListedNFTs";

const useListedNFTs = () => {
    const { address } = useSigner();

    const { data } = useQuery<GetListedNFTs, GetListedNFTsVariables>(
        GET_LISTED_NFTS,
        { variables: { currentAddress: address ?? "" }, skip: !address }
    );
    const listedNFTs = data?.nfts.map(parseRawNFT);

    return { listedNFTs };
};

const GET_LISTED_NFTS = gql`
  query GetListedNFTs($currentAddress: String!) {
    nfts(
      where: {
        to: "0x1a530E6840aE58a752C7a8f82d84e0686Dc9E944"
        from_not: $currentAddress
      }
    ) {
      id
      from
      to
      tokenURI
      price
    }
  }
`;

export default useListedNFTs;
