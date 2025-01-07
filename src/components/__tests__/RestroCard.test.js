import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RestroCard, { withPromotedRestaurantCard } from "../RestaurandCard";
import MOCK_DATA from './MockData/RestroCard_Data.json'

describe("restrocard test cases",()=>{
    it("should load restro card with props data", () => {
        render(<RestroCard resObj = {MOCK_DATA}/>);

        const cardName = screen.getByText('Notes Cafe');
        expect(cardName).toBeInTheDocument();
    });

    it("should load restro card with promoted label", () => {
        const PromotedRestaurantCard = withPromotedRestaurantCard(RestroCard);

        render(<PromotedRestaurantCard resObj = {MOCK_DATA}/>)

        const cardName = screen.getByText('Notes Cafe');
        expect(cardName).toBeInTheDocument();

        const promotedLabel = screen.getByText(/Promoted/);
        expect(promotedLabel).toBeInTheDocument();
 
    });
})