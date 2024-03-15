import { graphql } from "../gql";

export const CREATE_A_TODO = graphql(`
    mutation createATodo($input) {
        id 
        text
        done
    }
`);
