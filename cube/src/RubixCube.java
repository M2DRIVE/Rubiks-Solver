// Package not detected, please report project structure on CodeTogether's GitHub Issues
package foo.bar;

public class RubixCube {
    Cube cube;
    RubixCube() {
        this.cube = new Cube();
    }

    private void solve2x2Cube() {

    }

    private void solve3x3Cube() {

    }

    private void solve4x4Cube() {

    }

    private void solveCube() {
        if(cube.getSize() == 2) {
            solve2x2Cube();
        }
        else if(cube.getSize() == 3) {
            solve3x3Cube();
        }
        else if(cube.size() == 4) {
            solve4x4Cube();
        }

    }



}
