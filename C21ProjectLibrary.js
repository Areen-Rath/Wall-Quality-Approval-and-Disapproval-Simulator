function isTouchingHorizontally(object1, object2){

    object1RightEdge = object1.x + object1.width/2;
    object2LeftEdge = object2.x - object2.width/2;

    if(object1RightEdge >= object2LeftEdge){
            return true;
        } else{
            return false;
        }

}