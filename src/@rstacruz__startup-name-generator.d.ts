declare module '@rstacruz/startup-name-generator' {
    /**
     * Generates startup name suggestions based on a keyword
     * @param keyword - The keyword to generate names from
     * @returns An array of suggested startup names
     */
    function name(keyword: string): string[];
    export default name;
}
