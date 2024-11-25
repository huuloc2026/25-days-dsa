def stack(n):
    st = []
    while (n>0):
        digits = n%2
        st.append(digits)
        n //=2
    print(st)
    st.reverse()
    result = ''.join(map(str,st))
    return result


print(stack(13))
