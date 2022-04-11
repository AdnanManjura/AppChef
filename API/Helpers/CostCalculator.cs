using API.Enums;

namespace API.Helpers
{
    public  class CostCalculator
    {
        public static float CalculateRecipeDetailCost(float quantity, MeasureUnitEnum measureUnit, float purQuantity, float purPrice, MeasureUnitEnum purMeasureUnit){
            
            if(measureUnit == purMeasureUnit)
                {
                    float fD = purQuantity/quantity;
                    float b = purPrice/fD;
                    return (float)Math.Round(b * 100f) / 100f; 
                }
            
            if((int)measureUnit == 1)
            {
                if((int)purMeasureUnit==3)
                {
                    float a = purQuantity*1000;
                    float fD = a/quantity;
                    float b = purPrice/fD;
                       return (float)Math.Round(b * 100f) / 100f; 

                }
            }

            if((int)measureUnit==2)
            {
                if((int)purMeasureUnit == 4)
                {
                    float a = purQuantity*1000;
                    float fD = a/quantity;
                    float b = purPrice/fD;
                    return (float)Math.Round(b * 100f) / 100f; 
                }
            }

            if((int)measureUnit == 3)
            {
                if((int)purMeasureUnit == 1)
                {
                    float a = quantity*1000;
                    float fD = a/purQuantity;
                    float b = purPrice*fD;
                    return (float)Math.Round(b * 100f) / 100f; 

                }
            }

            if((int)measureUnit == 4)
            {
                if((int)purMeasureUnit == 2)
                {
                    float a = quantity*1000;
                    float fD = a/purQuantity;
                    float b = purPrice*fD;
                    return (float)Math.Round(b * 100f) / 100f; 
                }
            }
            return 0f;
        }
    }
}