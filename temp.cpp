#include <bits/stdc++.h>
using namespace std;

int helper(vector<int> &a,vector<int> &b){
    int n=a.size();
    vector<int> freq(n + 2, 0);       
    vector<int> nochange(n + 2, 0);    

    for (int i = 0; i < n; ++i) {
        if (a[i] == b[i]) {
            freq[a[i]] += 2;
            nochange[a[i]]++;
        } else {
            freq[a[i]]++;
            freq[b[i]]++;
        }
    }

    int max1 = 0;
    while (freq[max1] > 0) max1++;

  
    
    vector<int> temp;
    for (int x = 0; x < max1; ++x) {
        if (freq[x] >= 1 && nochange[x] == 0)
            temp.push_back(x);
    }

    
    int max2 = (temp.size() >= 2) ? temp[1] : n + 1;

    int ans = min(max1, max2);

    return ans;
}

void solve() {
    int n;
    cin >> n;

    vector<int> a(n), b(n);
    for (int& x : a) cin >> x;
    for (int& x : b) cin >> x;

     
    std::cout << helper(a,b) << std::endl;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    while (T--) {
        solve();
    }

    return 0;
}
