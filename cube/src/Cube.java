package foo.bar;

public class Cube {

    int size;
    
    Color[][] cube;

    Cube(int size){
        this.size = size;
        cube = clearCube();
    }

    Cube(int size, boolean scramble) {
        if(scramble) {
            this.size = size;
            cube = scrambleCube();
        }
        else {
            cube(size);
        }
    }

    void clearCube(Cube cube) {
        cube = new Color[6][this.size];

    }

    void scrambleCube(Cube cube) {

    }

    int getSize() {
        return size;
    }

}
