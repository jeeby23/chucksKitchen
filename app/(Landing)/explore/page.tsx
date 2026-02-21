import ExploreHero from "@/components/Landing/explore/hero-section";
import JollofEntrees from "@/components/Landing/explore/jollof-entrees";
import MenuCategories from "@/components/Landing/explore/menu-categories"
import PopularMenu from "@/components/Landing/explore/popular-menu";
import Swallow from "@/components/Landing/explore/swallow";
export default function ExplorePage() {
  return (
    <div>
       <ExploreHero/>
       <MenuCategories/>
       <PopularMenu/>
       <JollofEntrees/>
       <Swallow/>
    </div>
  );
}