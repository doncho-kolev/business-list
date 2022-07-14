import { useQuery, gql } from "@apollo/client";
import { RestLink } from 'apollo-link-rest';
import { Business } from "../models/Business";

export const BusinessLink = new RestLink({ uri: "https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f" });

const getBusinesses = gql`
  query letBusinesses {
    businesses @rest(type: "Business", path: "/") {
      name,
      description,
      address,
      id,
      phone,
      image,
      email
      }
  }
`;

export function useGetBisunesses() {
    const { loading, error, data } = useQuery(getBusinesses);
    return {
        loading,
        error,
        businesses: data?.businesses as Business[]
    }
}