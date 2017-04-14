import { createStore } from 'redux';
import reducer from './reducer';
const initialState = {
    items: [
        {
            text: "Install Glimmer",
            isDone: false,
        },
        {
            text: "Build app",
            isDone: false,
        },
        {
            text: "Bro down",
            isDone: false,
        }
    ],
    newItemText: ''
};
export default () => {
    const store = createStore(reducer, initialState);
    return store;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3BDLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQTtBQUUvQixNQUFNLFlBQVksR0FBRztJQUNuQixLQUFLLEVBQUU7UUFDTDtZQUNFLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNEO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsTUFBTSxFQUFFLEtBQUs7U0FDZDtLQUNGO0lBQ0QsV0FBVyxFQUFFLEVBQUU7Q0FDaEIsQ0FBQTtBQUVELGVBQWU7SUFDYixNQUFNLEtBQUssR0FBRyxXQUFXLENBQ3ZCLE9BQU8sRUFDUCxZQUFZLENBQ2IsQ0FBQztJQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpdGVtczogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiSW5zdGFsbCBHbGltbWVyXCIsXG4gICAgICBpc0RvbmU6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJCdWlsZCBhcHBcIixcbiAgICAgIGlzRG9uZTogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkJybyBkb3duXCIsXG4gICAgICBpc0RvbmU6IGZhbHNlLFxuICAgIH1cbiAgXSxcbiAgbmV3SXRlbVRleHQ6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZVxuICApO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cbiJdfQ==