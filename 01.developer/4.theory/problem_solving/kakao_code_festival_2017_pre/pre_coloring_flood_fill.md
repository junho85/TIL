# 카카오프렌즈 컬러링북
* https://programmers.co.kr/learn/courses/30/lessons/1829

* 문제가 좀 어렵지만 그림판에서 채우기 툴을 이용해 본 사람이라면 좀 더 이해하기 쉽다.
* 채우기 툴로 특정 위치를 선택하면 같은색으로 된 영역이 새로운 색으로 바뀐다.
* 같은색으로 된 영역을 채우는 것을 flood fill 이라 한다.

## cpp
```cpp
#include <vector>
#include <iostream>

using namespace std;

void print_picture(vector<vector<int>> *picture) {
    unsigned long m = (*picture).size();
    unsigned long n = (*picture)[0].size();

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cout << (*picture)[i][j];
        }
        cout << endl;
    }
}

int flood_fill_zero(vector<vector<int>> *picture, int x, int y, int current_color) {
    int filled = 0;

    unsigned long m = (*picture).size();
    unsigned long n = (*picture)[0].size();

    if (y < 0 || x < 0 || y >= m || x >= n) {
        return 0;
    }

    if (current_color == 0) {
        return 0;
    }

    if ((*picture)[y][x] == current_color && (*picture)[y][x] != 0) {

        (*picture)[y][x] = 0; // fill blank
        filled++;

        // fill other directions
        filled += flood_fill_zero(picture, x + 1, y, current_color);
        filled += flood_fill_zero(picture, x, y + 1, current_color);
        filled += flood_fill_zero(picture, x - 1, y, current_color);
        filled += flood_fill_zero(picture, x, y - 1, current_color);
    }

    return filled;
}

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
vector<int> solution(int m, int n, vector<vector<int>> picture) {
    int number_of_area = 0;
    int max_size_of_one_area = 0;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int current_color = picture[i][j];
            int filled = flood_fill_zero(&picture, j, i, current_color);

            if (filled > 0) {
                number_of_area++;
                cout << "filled=" << filled << endl;
            }

            if (filled > max_size_of_one_area) {
                max_size_of_one_area = filled;
            }
        }
    }

    vector<int> answer(2);
    answer[0] = number_of_area;
    answer[1] = max_size_of_one_area;
    return answer;
}

int main() {

    int m = 6;
    int n = 4;

    vector<vector<int>> picture({
                                        vector<int>({1, 1, 1, 0}),
                                        vector<int>({1, 2, 2, 0}),
                                        vector<int>({1, 0, 0, 1}),
                                        vector<int>({0, 0, 0, 1}),
                                        vector<int>({0, 0, 0, 3}),
                                        vector<int>({0, 0, 0, 3}),
                                });

    vector<int> answer(2);
    answer = solution(m, n, picture);

    // 4, 5
    cout << "number of area=" << answer[0] << endl;
    cout << "max size of one area=" << answer[1] << endl;
    return 0;
}


```