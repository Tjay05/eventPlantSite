import enrollIcon from '../../icons/enroll.svg';
import prodIcon from '../../icons/product.svg';
import cartIcon from '../../icons/darkOutCart.svg';
import plusIcon from '../../icons/lightPlus.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [enrollmentCount, setEnrollmentCount] = useState(0)
  const [blogCount, setBlogCount] = useState(0)
  const [productCount, setProductCount] = useState(0)
  const [shopCount, setShopCount] = useState(0)
  
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shop = await fetch("https://diamondreams.onrender.com/shop/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const shopData = await shop.json()
        setShopCount(shopData.length)

        const blogsResponse = await fetch("https://diamondreams.onrender.com/admin/blog/all");
        const blogsData = await blogsResponse.json();
        const product = await fetch("https://diamondreams.onrender.com/product/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const productData = await product.json();
        // console.log(productData)
        setProductCount(productData.length)

        setBlogCount(blogsData.length);
        const res = await fetch("https://diamondreams.onrender.com/academy/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        // console.log(data)
        setEnrollmentCount(data.length)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className='dashBoardSection'>
        <h2>Welcome Back!</h2>
        <div className="grid-icons">
          <article>
            <Link to='../Gowns'>
              <img src={prodIcon} alt="Product" />
              <p>Total Products</p>
              <span>{productCount}</span>
              <button><img src={plusIcon} alt="Plus" />Add new product</button>
            </Link>
          </article>
          <article>
            <Link to='../Pending'>
              <img src={enrollIcon} alt="Enrol" />
              <p>Total Enrolment</p>
              <span>{enrollmentCount}</span>
              <button>View</button>
            </Link>
          </article>
          <article>
            <Link to='../Pending-orders'>
              <img src={cartIcon} alt="Orders" />
              <p>Total Orders</p>
              <span>{ shopCount}</span>
              <button>View</button>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
 
export default Dashboard;