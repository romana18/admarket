import React, { useContext } from 'react';
import Admcontext from '../../context/admcontext';
import { isUserValid } from '../../../lib/pocketbase';

const productImage = (productName) => {
    switch (productName.toLowerCase()) {
        case 'milk':
            return 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        case 'desi ghee':
            return 'https://images.healthshots.com/healthshots/en/uploads/2021/11/03180439/which-ghee-is-better-770x433.jpg';
        case 'curd':
            return 'https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_To_Make_Fresh_Homemade_Yogurt_Curd.jpg';
        case 'paneer':
            return 'https://myfoodstory.com/wp-content/uploads/2016/10/How-to-make-Paneer-3.jpg';
        case 'khoya':
            return 'https://www.grocio.in/upload_images/product/big/4121620396860.jpg';
        case 'white butter':
            return 'https://static.toiimg.com/thumb/55600690.cms?imgsize=193758&width=509&height=340';
        case 'cheese':
            return 'https://www.usatoday.com/gcdn/media/2022/07/01/USATODAY/usatsports/imageForEntry2-ueq.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp';
        case 'cream':
            return 'https://www.onceuponachef.com/images/2022/06/whipped-cream-1536x1009.jpg';
        default:
            return 'https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg'; // Default image
    }
};

function Product() {
    const { prodname, prodprice, prodslife, dairyname, FSSAI, prodquant, prodlocation, prodcreated } = useContext(Admcontext);

    const imageUrl = productImage(prodname);

    return (
        <>
        {isUserValid ?(
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={imageUrl} alt="Product Image" />
                        </div>
                      
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{prodname}</h2>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300">Rs. {prodprice}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Posted :</span>
                                <span className="text-gray-600 dark:text-gray-300">{prodcreated}</span>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Quantity:</span>
                                <span className="text-gray-600 dark:text-gray-300">{prodquant}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Shelf Life:</span>
                                <span className="text-gray-600 dark:text-gray-300">{prodslife}</span>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Dairy Name:</span>
                                <span className="text-gray-600 dark:text-gray-300">{dairyname}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Location:</span>
                                <span className="text-gray-600 dark:text-gray-300">{prodlocation}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ):(
            <h1>Hello Guest</h1>
        )}
        </>
        
        
        
        
    );
}

export default Product;
